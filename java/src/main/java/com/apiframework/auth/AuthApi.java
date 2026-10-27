package com.apiframework.auth;

import com.apiframework.config.Config;
import com.apiframework.http.ApiClient;
import com.apiframework.shared.Json;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import java.net.URI;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Multi-step login: corp JWT (user + password + TOTP) -> OAuth2 token -> auth code -> session cookies.
 *
 * <p>Every endpoint, client id and header name comes from the environment (see {@code .env.example}).
 * The flow is a reference implementation: adapt the payloads and cookie names in this class to the
 * identity provider of your project, and keep the public API ({@link #loginAndGetCookie},
 * {@link #refreshSession}) stable so the tests do not change.
 */
public final class AuthApi {
  /** Cookies keyed by user, lazily loaded from the global setup cache. */
  private static Map<String, String> sessions;

  private AuthApi() {}

  /** Cookie names that must come back from the session endpoint, e.g. {@code sessionid,connect.sid}. */
  private static List<String> sessionCookieNames() {
    return Arrays.stream(Config.env("AUTH_SESSION_COOKIES", "sessionid").split(","))
        .map(String::trim)
        .filter(name -> !name.isEmpty())
        .toList();
  }

  public static String getCorpJwt(UserCredentials credentials) {
    Map<String, Object> payload = new LinkedHashMap<>();
    payload.put(
        "secondFactor", Map.of("secCode", Totp.generate(credentials.secret()), "deviceId", 1));
    payload.put("appCredentials", Map.of("appIdKey", Config.requireEnv("AUTH_APP_ID")));
    payload.put(
        "account",
        Map.of("accountName", credentials.userName(), "password", credentials.password()));
    payload.put("generateJwt", true);
    payload.put(
        "oauthAuthorizeRequest",
        Map.of(
            "clientId", Config.requireEnv("AUTH_CLIENT_ID"),
            "responseType", "code",
            "scope", "openid"));

    Response response =
        ApiClient.anonymousSpec()
            .contentType("application/json")
            .body(Json.toJson(payload))
            .post(Config.requireEnv("AUTH_LOGIN_ENDPOINT"));
    ApiClient.requireSuccess(response);

    return response.jsonPath().getString("corpJwt");
  }

  public record AuthTokens(String idToken, String accessToken) {}

  public static AuthTokens getAuthToken(String corpJwt) {
    Map<String, Object> payload = new LinkedHashMap<>();
    payload.put("client_id", Config.requireEnv("AUTH_CLIENT_ID"));
    payload.put("client_secret", Config.requireEnv("AUTH_CLIENT_SECRET"));
    payload.put("grant_type", Config.requireEnv("AUTH_GRANT_TYPE"));
    payload.put("assertion", corpJwt);
    payload.put("scope", "openid");

    Response response =
        ApiClient.anonymousSpec()
            .contentType("application/json")
            .body(Json.toJson(payload))
            .post(Config.requireEnv("AUTH_OAUTH_TOKEN_ENDPOINT"));
    ApiClient.requireSuccess(response);

    return new AuthTokens(
        response.jsonPath().getString("id_token"), response.jsonPath().getString("access_token"));
  }

  public static String getAuthCode(String corpJwt) {
    try {
      RequestSpecification spec =
          ApiClient.anonymousSpec()
              .urlEncodingEnabled(true) // query params (redirect_uri) must be encoded here
              .queryParam("client_id", Config.requireEnv("AUTH_CLIENT_ID"))
              .queryParam("redirect_uri", Config.baseUrl() + "/__login")
              .queryParam("response_type", "code")
              .queryParam("scope", "openid")
              .header(Config.env("AUTH_JWT_HEADER", "X-Corp-Auth-Jwt"), corpJwt)
              .header("Accept", "application/json")
              .redirects()
              .follow(false);
      Response response = spec.get(Config.requireEnv("AUTH_OAUTH_AUTHCODE_ENDPOINT"));

      // The code can come back in a redirect or in the body.
      int status = response.statusCode();
      if (status == 301 || status == 302) {
        String location = response.getHeader("Location");
        String code = location == null ? null : queryParam(location, "code");
        if (code != null) {
          return code;
        }
      }
      if (status == 200) {
        String code = response.jsonPath().getString("code");
        if (code != null) {
          return code;
        }
      }

      throw new IllegalStateException("Auth code not found in the identity provider response");
    } catch (RuntimeException e) {
      throw new IllegalStateException("Failed to get auth code: " + e.getMessage(), e);
    }
  }

  public static Map<String, String> getSessionCookies(
      String authCode, String idToken, String accessToken) {
    Response response =
        ApiClient.anonymousSpec()
            .contentType("application/json")
            .header("Accept", "*/*")
            .header("Cookie", "oidc-token=" + idToken + "; oidc-token-access=" + accessToken)
            .header("Origin", Config.baseUrl())
            .header("Referer", Config.baseUrl() + "/")
            .body(Json.toJson(Map.of("input", Map.of("authCode", authCode))))
            .post(Config.authLoginUrl());

    if (response.statusCode() >= 400) {
      System.err.println("--- Login Error ---");
      System.err.println("Status: " + response.statusCode());
      System.err.println("Response Data: " + response.asString());
      throw new IllegalStateException("Failed to set session: HTTP " + response.statusCode());
    }

    Map<String, String> found = new HashMap<>();
    for (String setCookie : response.headers().getValues("Set-Cookie")) {
      String nameValue = setCookie.split(";", 2)[0];
      int eq = nameValue.indexOf('=');
      if (eq > 0) {
        found.put(nameValue.substring(0, eq).trim().toLowerCase(), nameValue.substring(eq + 1));
      }
    }

    List<String> missing =
        sessionCookieNames().stream().filter(name -> !found.containsKey(name.toLowerCase())).toList();
    if (!missing.isEmpty()) {
      throw new IllegalStateException(
          "Failed to extract required cookies from login response. Missing: "
              + String.join(", ", missing)
              + ".");
    }

    Map<String, String> result = new LinkedHashMap<>();
    sessionCookieNames().forEach(name -> result.put(name, found.get(name.toLowerCase())));
    return result;
  }

  /**
   * Runs the full flow (corp JWT -> OAuth2 -> 2FA -> session cookie).
   *
   * <p>Must not be called concurrently: many identity providers reject parallel OAuth code exchanges
   * with {@code invalid_grant}. Prefer {@link #loginAndGetCookie}, which reuses the session cached by
   * the global setup.
   */
  public static String performLogin(UserCredentials credentials) {
    try {
      String corpJwt = getCorpJwt(credentials);
      AuthTokens tokens = getAuthToken(corpJwt);
      String authCode = getAuthCode(corpJwt);
      Map<String, String> sessionCookies =
          getSessionCookies(authCode, tokens.idToken(), tokens.accessToken());

      List<String> parts = new ArrayList<>();
      sessionCookies.forEach((name, value) -> parts.add(name + "=" + value));
      parts.add("oidc-token-local=" + tokens.idToken());
      parts.add("oidc-token=" + tokens.accessToken());

      String cookie = String.join("; ", parts);
      Config.setCookie(cookie);
      return cookie;
    } catch (RuntimeException e) {
      System.err.println("Error in the authentication process: " + e);
      throw new IllegalStateException("Failed to login and get cookie: " + e.getMessage(), e);
    }
  }

  /**
   * Activates the session for {@code credentials} and returns its cookie.
   *
   * <p>Sessions are pre-authenticated once by the global setup, so switching users mid-test is an
   * in-memory swap. Falls back to a live login when the account is missing from the cache.
   */
  public static synchronized String loginAndGetCookie(UserCredentials credentials) {
    String key = SessionCache.key(credentials);
    if (sessions == null) {
      sessions = SessionCache.read();
    }

    String cached = sessions.get(key);
    if (cached != null && !cached.isEmpty()) {
      Config.setCookie(cached);
      return cached;
    }

    String cookie = performLogin(credentials);
    sessions.put(key, cookie);
    return cookie;
  }

  /** Discards the cached session for a user and logs in again (expired or invalidated cookie). */
  public static synchronized String refreshSession(UserCredentials credentials) {
    String cookie = performLogin(credentials);
    if (sessions == null) {
      sessions = SessionCache.read();
    }
    sessions.put(SessionCache.key(credentials), cookie);
    return cookie;
  }

  private static String queryParam(String url, String name) {
    String query = URI.create(url).getRawQuery();
    if (query == null) {
      return null;
    }
    for (String pair : query.split("&")) {
      String[] kv = pair.split("=", 2);
      if (kv.length == 2 && kv[0].equals(name)) {
        return URLDecoder.decode(kv[1], StandardCharsets.UTF_8);
      }
    }
    return null;
  }
}
