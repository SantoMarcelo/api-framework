package com.apiframework.domain.health;

import com.apiframework.config.Config;
import com.apiframework.http.ApiClient;
import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.Endpoints.HealthEndpoints;

public final class HealthApi {
  private HealthApi() {}

  public static ApiResponse<String> getHealthByApi() {
    return ApiResponse.raw(ApiClient.anonymousSpec().get(Config.baseApiUrl() + HealthEndpoints.HEALTH.path()));
  }
}
