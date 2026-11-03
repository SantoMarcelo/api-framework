package com.apiframework.domain.testutils;

import com.apiframework.config.Config;
import com.apiframework.domain.testutils.TestUtilsTypes.ExpiredTokenRequest;
import com.apiframework.domain.testutils.TestUtilsTypes.TokenRequest;
import com.apiframework.http.ApiClient;
import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.Endpoints.TestUtilsEndpoints;
import com.apiframework.shared.Json;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

/** Test-only endpoints: database reset/seed and custom JWTs. No authentication. */
public final class TestUtilsApi {
  private TestUtilsApi() {}

  /** Wipes the database, restarts the ids and reloads the seed. */
  public static ApiResponse<String> resetDatabaseByApi() {
    return post(TestUtilsEndpoints.RESET.path(), null);
  }

  /** Reloads the seed data (upsert; orders and carts are kept). */
  public static ApiResponse<String> seedDatabaseByApi() {
    return post(TestUtilsEndpoints.SEED.path(), null);
  }

  public static ApiResponse<String> generateTokenByApi(TokenRequest body) {
    return post(TestUtilsEndpoints.TOKEN.path(), body);
  }

  public static ApiResponse<String> generateExpiredTokenByApi(ExpiredTokenRequest body) {
    return post(TestUtilsEndpoints.EXPIRED_TOKEN.path(), body);
  }

  private static ApiResponse<String> post(String endpoint, Object body) {
    Response response =
        ApiClient.anonymousSpec()
            .contentType(ContentType.JSON)
            .body(body == null ? "{}" : Json.toJson(body))
            .post(Config.baseApiUrl() + endpoint);
    return ApiResponse.raw(response);
  }
}
