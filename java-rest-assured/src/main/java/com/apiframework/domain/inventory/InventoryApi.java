package com.apiframework.domain.inventory;

import com.apiframework.config.Config;
import com.apiframework.domain.inventory.InventoryTypes.StockMovementRequest;
import com.apiframework.http.ApiClient;
import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.Endpoints.InventoryEndpoints;
import com.apiframework.shared.Helpers;
import java.util.Map;

/** Stock movements. Every endpoint requires an ADMIN token. */
public final class InventoryApi {
  private InventoryApi() {}

  public static ApiResponse<String> registerStockMovementByApi(long productId, StockMovementRequest body) {
    String endpoint =
        Helpers.buildEndpoint(InventoryEndpoints.REGISTER_STOCK_MOVEMENT, Map.of("id", productId));
    return ApiResponse.raw(ApiClient.post(Config.baseApiUrl() + endpoint, body));
  }

  /** @param query filters (productId, search, type, page, pageSize); empty for the defaults */
  public static ApiResponse<String> listStockMovementsByApi(Map<String, ?> query) {
    String endpoint = Helpers.buildEndpoint(InventoryEndpoints.LIST_STOCK_MOVEMENTS, Map.of(), query);
    return ApiResponse.raw(ApiClient.get(Config.baseApiUrl() + endpoint));
  }
}
