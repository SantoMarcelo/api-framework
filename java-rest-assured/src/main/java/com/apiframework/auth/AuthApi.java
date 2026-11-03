package com.apiframework.auth;

import com.apiframework.config.Config;
import com.apiframework.http.ApiClient;
import com.apiframework.auth.AuthTypes.RegisterRequest;
import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.Endpoints.AuthEndpoints;
import com.apiframework.shared.Json;
import io.restassured.response.Response;
import java.util.Map;

/**
 * Email + password login that returns a JWT (sent as {@code Authorization: Bearer <token>}).
 *
 * <p>Mirrors the backend's {@code POST /auth/login}: the body is {@code {email, password}} and the
 * response is {@code {token, expiresIn, expiresAt, user}}. JWTs are stateless, so there is no
 * session to keep alive: logging out is just discarding the token.
 */
public final class AuthApi {
  /** Tokens keyed by user, lazily loaded from the global setup cache. */
  private static Map<String, String> sessions;

  private AuthApi() {}

  /** Raw login call, for tests that assert on the response itself (status, error codes). */
  public static Response loginRequest(String email, String password) {
    return ApiClient.anonymousSpec()
        .contentType("application/json")
        .body(Json.toJson(Map.of("email", email, "password", password)))
        .post(Config.baseApiUrl() + AuthEndpoints.LOGIN.path());
  }

  /** Logs in and activates the token for the next requests. Throws when the login fails. */
  public static String login(UserCredentials credentials) {
    Response response = loginRequest(credentials.userName(), credentials.password());
    ApiClient.requireSuccess(response);

    String token = response.jsonPath().getString("token");
    if (token == null || token.isEmpty()) {
      throw new IllegalStateException("Login response has no token: " + response.asString());
    }
    Config.setToken(token);
    return token;
  }

  /**
   * Activates the token for {@code credentials} and returns it.
   *
   * <p>Tokens are fetched once by the global setup, so switching users mid-test is an in-memory
   * swap. Falls back to a live login when the account is missing from the cache.
   */
  public static synchronized String loginAndGetToken(UserCredentials credentials) {
    String key = SessionCache.key(credentials);
    if (sessions == null) {
      sessions = SessionCache.read();
    }

    String cached = sessions.get(key);
    if (cached != null && !cached.isEmpty()) {
      Config.setToken(cached);
      return cached;
    }

    String token = login(credentials);
    sessions.put(key, token);
    return token;
  }

  /** Discards the cached token for a user and logs in again (expired or invalidated token). */
  public static synchronized String refreshSession(UserCredentials credentials) {
    String token = login(credentials);
    if (sessions == null) {
      sessions = SessionCache.read();
    }
    sessions.put(SessionCache.key(credentials), token);
    return token;
  }

  /** Creates a CUSTOMER account; the response is a session, like the login. */
  public static ApiResponse<String> registerByApi(RegisterRequest body) {
    Response response =
        ApiClient.anonymousSpec()
            .contentType("application/json")
            .body(Json.toJson(body))
            .post(Config.baseApiUrl() + AuthEndpoints.REGISTER.path());
    return ApiResponse.raw(response);
  }

  /** Profile of the user that owns the active token. */
  public static ApiResponse<String> getMeByApi() {
    return ApiResponse.raw(ApiClient.get(Config.baseApiUrl() + AuthEndpoints.ME.path()));
  }

  /** Server side of the logout (204). The token stays active until {@link #logout()}. */
  public static ApiResponse<String> logoutByApi() {
    return ApiResponse.raw(ApiClient.post(Config.baseApiUrl() + AuthEndpoints.LOGOUT.path(), Map.of()));
  }

  /** Stops sending the token (the backend's logout is stateless). */
  public static void logout() {
    Config.setToken(null);
  }
}
