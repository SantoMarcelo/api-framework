package com.apiframework.domain.orders;

import com.apiframework.config.Config;
import com.apiframework.domain.orders.OrdersTypes.CreateOrderRequest;
import com.apiframework.domain.orders.OrdersTypes.QuoteRequest;
import com.apiframework.http.ApiClient;
import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.Endpoints.OrderEndpoints;
import com.apiframework.shared.Helpers;
import com.apiframework.shared.Json;
import java.util.Map;

/**
 * Checkout and orders. Customer routes need a CUSTOMER token and act on the token owner's cart and
 * orders; {@code admin*} routes need an ADMIN token.
 */
public final class OrdersApi {
  private OrdersApi() {}

  public static ApiResponse<String> quoteCheckoutByApi(QuoteRequest body) {
    return ApiResponse.raw(ApiClient.post(url(OrderEndpoints.QUOTE_CHECKOUT.path()), body));
  }

  /** Turns the cart into an order (simulated payment). */
  public static ApiResponse<String> createOrderByApi(CreateOrderRequest body) {
    return ApiResponse.raw(ApiClient.post(url(OrderEndpoints.CREATE_ORDER.path()), body));
  }

  /** @param query filters (status, page, pageSize); empty for the defaults */
  public static ApiResponse<String> listOrdersByApi(Map<String, ?> query) {
    String endpoint = Helpers.buildEndpoint(OrderEndpoints.LIST_ORDERS, Map.of(), query);
    return ApiResponse.raw(ApiClient.get(url(endpoint)));
  }

  public static ApiResponse<String> getOrderByApi(long id) {
    String endpoint = Helpers.buildEndpoint(OrderEndpoints.GET_ORDER, Map.of("id", id));
    return ApiResponse.raw(ApiClient.get(url(endpoint)));
  }

  /** Only PAID orders can be cancelled; the stock is returned. */
  public static ApiResponse<String> cancelOrderByApi(long id) {
    String endpoint = Helpers.buildEndpoint(OrderEndpoints.CANCEL_ORDER, Map.of("id", id));
    return ApiResponse.raw(ApiClient.post(url(endpoint), Map.of()));
  }

  public static ApiResponse<String> adminListOrdersByApi(Map<String, ?> query) {
    String endpoint = Helpers.buildEndpoint(OrderEndpoints.ADMIN_LIST_ORDERS, Map.of(), query);
    return ApiResponse.raw(ApiClient.get(url(endpoint)));
  }

  public static ApiResponse<String> adminGetOrderByApi(long id) {
    String endpoint = Helpers.buildEndpoint(OrderEndpoints.ADMIN_GET_ORDER, Map.of("id", id));
    return ApiResponse.raw(ApiClient.get(url(endpoint)));
  }

  public static ApiResponse<String> adminCancelOrderByApi(long id) {
    String endpoint = Helpers.buildEndpoint(OrderEndpoints.ADMIN_CANCEL_ORDER, Map.of("id", id));
    return ApiResponse.raw(ApiClient.post(url(endpoint), Map.of()));
  }

  /** Places an order from the current cart and returns its id. Requires a CUSTOMER token. */
  public static long createOrder(CreateOrderRequest body) {
    ApiResponse<String> response = createOrderByApi(body);
    if (response.status() != 201) {
      throw new IllegalStateException("Could not create order: HTTP " + response.status() + " " + response.data());
    }
    return Json.readTree(response.data()).get("id").asLong();
  }

  // cleanup* -> test teardown, never throws (cancelling returns the stock)
  public static void cleanupOrder(long id) {
    try {
      cancelOrderByApi(id);
    } catch (RuntimeException ignored) {
      // teardown must not fail the suite
    }
  }

  private static String url(String endpoint) {
    return Config.baseApiUrl() + endpoint;
  }
}
