package com.apiframework.http;

import com.apiframework.config.Config;
import com.apiframework.shared.Json;
import io.qameta.allure.restassured.AllureRestAssured;
import io.restassured.RestAssured;
import io.restassured.config.EncoderConfig;
import io.restassured.config.RestAssuredConfig;
import io.restassured.config.SSLConfig;
import io.restassured.filter.Filter;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

/**
 * Single entry point for every HTTP call (the equivalent of {@code HttpClientAdapter}).
 *
 * <p>The session cookie held by {@link Config#cookie()} is injected into every request, so tests
 * never handle cookies. Unlike axios, REST Assured does not throw on 4xx/5xx: negative tests
 * simply assert on {@code status()}. Failed requests are logged for diagnosis.
 */
public final class ApiClient {
  private static final RestAssuredConfig REST_CONFIG = buildConfig();
  private static final Filter FAILURE_LOGGER =
      (request, response, ctx) -> {
        Response result = ctx.next(request, response);
        if (result.statusCode() >= 400) {
          System.err.printf(
              "[%s %d] %s%n%s%n",
              request.getMethod(), result.statusCode(), request.getURI(), result.asString());
        }
        return result;
      };

  private ApiClient() {}

  /** A request with the session cookie. */
  public static RequestSpecification spec() {
    RequestSpecification spec = anonymousSpec();
    String cookie = Config.cookie();
    return cookie.isEmpty() ? spec : spec.header("Cookie", cookie);
  }

  /** A request without the session cookie (the login flow). */
  public static RequestSpecification anonymousSpec() {
    return RestAssured.given()
        .config(REST_CONFIG)
        .urlEncodingEnabled(false) // endpoints are already built; never double-encode
        .accept("application/json, text/plain, */*")
        .filter(FAILURE_LOGGER)
        .filter(new AllureRestAssured());
  }

  public static Response get(String url) {
    return spec().get(url);
  }

  public static Response post(String url, Object body) {
    return spec().contentType(ContentType.JSON).body(Json.toJson(body)).post(url);
  }

  public static Response put(String url, Object body) {
    return spec().contentType(ContentType.JSON).body(Json.toJson(body)).put(url);
  }

  public static Response patch(String url, Object body) {
    return spec().contentType(ContentType.JSON).body(Json.toJson(body)).patch(url);
  }

  public static Response delete(String url) {
    return spec().delete(url);
  }

  /** Throws on a non-2xx response; for helpers where a failure is not an expected outcome. */
  public static Response requireSuccess(Response response) {
    if (response.statusCode() < 200 || response.statusCode() >= 300) {
      throw new IllegalStateException(
          "Unexpected HTTP " + response.statusCode() + ": " + response.asString());
    }
    return response;
  }

  private static RestAssuredConfig buildConfig() {
    RestAssuredConfig config =
        RestAssuredConfig.config()
            // do not append ";charset=ISO-8859-1" to Content-Type
            .encoderConfig(
                EncoderConfig.encoderConfig().appendDefaultContentCharsetToContentTypeIfUndefined(false));

    if (TlsSupport.isConfigured()) {
      SSLConfig ssl = SSLConfig.sslConfig().keyStore(TlsSupport.keyStore(), TlsSupport.STORE_PASSWORD);
      if (TlsSupport.trustStore() != null) {
        ssl = ssl.trustStore(TlsSupport.trustStore());
      }
      config = config.sslConfig(ssl);
    }
    return config;
  }
}
