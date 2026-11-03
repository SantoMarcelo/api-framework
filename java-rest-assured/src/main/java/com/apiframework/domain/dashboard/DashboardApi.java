package com.apiframework.domain.dashboard;

import com.apiframework.config.Config;
import com.apiframework.http.ApiClient;
import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.Endpoints.DashboardEndpoints;

/** Admin dashboard totals. Requires an ADMIN token. */
public final class DashboardApi {
  private DashboardApi() {}

  public static ApiResponse<String> getDashboardByApi() {
    return ApiResponse.raw(ApiClient.get(Config.baseApiUrl() + DashboardEndpoints.GET_DASHBOARD.path()));
  }
}
