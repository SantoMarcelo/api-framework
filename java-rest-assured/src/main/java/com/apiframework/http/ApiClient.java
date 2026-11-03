package com.apiframework.http;

import com.apiframework.config.Config;
import com.apiframework.shared.Json;
import io.qameta.allure.Allure;
import io.qameta.allure.restassured.AllureRestAssured;
import io.restassured.RestAssured;
import io.restassured.config.EncoderConfig;
import io.restassured.config.RestAssuredConfig;
import io.restassured.config.SSLConfig;
import io.restassured.filter.Filter;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import java.security.GeneralSecurityException;
import org.apache.http.conn.ssl.SSLSocketFactory;

/**
 * Single entry point for every HTTP call (the equivalent of {@code HttpClientAdapter}).
 *
 * <p>The JWT held by {@link Config#token()} is sent as {@code Authorization: Bearer} on every
 * request, so tests never handle tokens. Unlike axios, REST Assured does not throw on 4xx/5xx: negative tests
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

  private static final AllureRestAssured ALLURE_FILTER = new AllureRestAssured();

  /**
   * Attaches request/response to the Allure report, but only while a test or fixture is running:
   * calls made outside one (the global setup login) have nowhere to attach to.
   */
  private static final Filter ALLURE_ATTACHMENTS =
      (request, response, ctx) ->
          Allure.getLifecycle().getCurrentTestCaseOrStep().isPresent()
              ? ALLURE_FILTER.filter(request, response, ctx)
              : ctx.next(request, response);

  private ApiClient() {}

  /** A request with the bearer token. */
  public static RequestSpecification spec() {
    RequestSpecification spec = anonymousSpec();
    String token = Config.token();
    return token.isEmpty() ? spec : spec.header("Authorization", "Bearer " + token);
  }

  /** A request without the bearer token (the login flow). */
  public static RequestSpecification anonymousSpec() {
    return RestAssured.given()
        .config(REST_CONFIG)
        .urlEncodingEnabled(false) // endpoints are already built; never double-encode
        .accept("application/json, text/plain, */*")
        .filter(FAILURE_LOGGER)
        .filter(ALLURE_ATTACHMENTS);
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
      // SSLConfig only takes the client key store as a file, so hand it an in-memory socket factory.
      // A null trust store falls back to the JVM default.
      try {
        SSLSocketFactory factory =
            new SSLSocketFactory(
                TlsSupport.keyStore(), TlsSupport.STORE_PASSWORD, TlsSupport.trustStore());
        config = config.sslConfig(SSLConfig.sslConfig().sslSocketFactory(factory));
      } catch (GeneralSecurityException e) {
        throw new IllegalStateException("Could not build the mTLS socket factory", e);
      }
    }
    return config;
  }
}
