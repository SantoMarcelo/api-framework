package com.apiframework.domain.cart;

import com.apiframework.config.Config;
import com.apiframework.domain.cart.CartTypes.AddCartItemRequest;
import com.apiframework.domain.cart.CartTypes.UpdateCartItemRequest;
import com.apiframework.http.ApiClient;
import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.Endpoints.CartEndpoints;
import com.apiframework.shared.Helpers;
import java.util.Map;

/** Cart of the user that owns the active token. Requires a CUSTOMER token. */
public final class CartApi {
  private CartApi() {}

  public static ApiResponse<String> getCartByApi() {
    return ApiResponse.raw(ApiClient.get(url(CartEndpoints.GET_CART.path())));
  }

  public static ApiResponse<String> clearCartByApi() {
    return ApiResponse.raw(ApiClient.delete(url(CartEndpoints.CLEAR_CART.path())));
  }

  /** Adds the item; when it is already in the cart the quantities are summed. */
  public static ApiResponse<String> addItemByApi(AddCartItemRequest body) {
    return ApiResponse.raw(ApiClient.post(url(CartEndpoints.ADD_ITEM.path()), body));
  }

  public static ApiResponse<String> updateItemByApi(long productId, UpdateCartItemRequest body) {
    String endpoint = Helpers.buildEndpoint(CartEndpoints.UPDATE_ITEM, Map.of("productId", productId));
    return ApiResponse.raw(ApiClient.patch(url(endpoint), body));
  }

  public static ApiResponse<String> removeItemByApi(long productId) {
    String endpoint = Helpers.buildEndpoint(CartEndpoints.REMOVE_ITEM, Map.of("productId", productId));
    return ApiResponse.raw(ApiClient.delete(url(endpoint)));
  }

  /** Empties the cart and adds one item, so each test starts from a known cart. */
  public static void resetCartWith(long productId, int quantity) {
    ApiClient.requireSuccess(ApiClient.delete(url(CartEndpoints.CLEAR_CART.path())));
    ApiClient.requireSuccess(
        ApiClient.post(url(CartEndpoints.ADD_ITEM.path()), new AddCartItemRequest(productId, quantity)));
  }

  private static String url(String endpoint) {
    return Config.baseApiUrl() + endpoint;
  }
}
