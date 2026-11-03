package com.apiframework.domain.products;

import com.apiframework.config.Config;
import com.apiframework.domain.products.ProductsTypes.ProductRequest;
import com.apiframework.http.ApiClient;
import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.Endpoints.ProductEndpoints;
import com.apiframework.shared.Helpers;
import com.apiframework.shared.Json;
import com.fasterxml.jackson.databind.JsonNode;
import java.util.Map;
import java.util.NoSuchElementException;

/** Public catalog ({@code /products}, {@code /categories}) and product admin ({@code /admin/products}). */
public final class ProductsApi {
  private ProductsApi() {}

  public static ApiResponse<String> listCategoriesByApi() {
    return ApiResponse.raw(ApiClient.anonymousSpec().get(url(ProductEndpoints.LIST_CATEGORIES.path())));
  }

  /** @param query filters (search, category, sort, page, pageSize); empty for the defaults */
  public static ApiResponse<String> listProductsByApi(Map<String, ?> query) {
    String endpoint = Helpers.buildEndpoint(ProductEndpoints.LIST_PRODUCTS, Map.of(), query);
    return ApiResponse.raw(ApiClient.anonymousSpec().get(url(endpoint)));
  }

  public static ApiResponse<String> getProductByApi(long id) {
    String endpoint = Helpers.buildEndpoint(ProductEndpoints.GET_PRODUCT, Map.of("id", id));
    return ApiResponse.raw(ApiClient.anonymousSpec().get(url(endpoint)));
  }

  /** @param query same filters as the public list, plus {@code active=true|false} */
  public static ApiResponse<String> adminListProductsByApi(Map<String, ?> query) {
    String endpoint = Helpers.buildEndpoint(ProductEndpoints.ADMIN_LIST_PRODUCTS, Map.of(), query);
    return ApiResponse.raw(ApiClient.get(url(endpoint)));
  }

  public static ApiResponse<String> adminGetProductByApi(long id) {
    String endpoint = Helpers.buildEndpoint(ProductEndpoints.ADMIN_GET_PRODUCT, Map.of("id", id));
    return ApiResponse.raw(ApiClient.get(url(endpoint)));
  }

  public static ApiResponse<String> adminCreateProductByApi(ProductRequest body) {
    return ApiResponse.raw(ApiClient.post(url(ProductEndpoints.ADMIN_CREATE_PRODUCT.path()), body));
  }

  public static ApiResponse<String> adminUpdateProductByApi(long id, ProductRequest body) {
    String endpoint = Helpers.buildEndpoint(ProductEndpoints.ADMIN_UPDATE_PRODUCT, Map.of("id", id));
    return ApiResponse.raw(ApiClient.put(url(endpoint), body));
  }

  /** Soft delete ({@code active=false}); idempotent. */
  public static ApiResponse<String> adminDeleteProductByApi(long id) {
    String endpoint = Helpers.buildEndpoint(ProductEndpoints.ADMIN_DELETE_PRODUCT, Map.of("id", id));
    return ApiResponse.raw(ApiClient.delete(url(endpoint)));
  }

  /** Creates a product and returns its id. Requires an ADMIN token. */
  public static long createProduct(ProductRequest body) {
    ApiResponse<String> response = adminCreateProductByApi(body);
    if (response.status() != 201) {
      throw new IllegalStateException("Could not create product: HTTP " + response.status() + " " + response.data());
    }
    return Json.readTree(response.data()).get("id").asLong();
  }

  /** Id of the first active product of the public catalog with at least {@code minStock} units. */
  public static long getAvailableProductId(int minStock) {
    JsonNode page = Json.readTree(listProductsByApi(Map.of("pageSize", 100)).data());
    for (JsonNode product : page.get("data")) {
      if (product.get("stock").asInt() >= minStock) {
        return product.get("id").asLong();
      }
    }
    throw new NoSuchElementException("No active product with stock >= " + minStock);
  }

  /** First category of the public catalog (only categories with active products are listed). */
  public static String getAnyCategory() {
    JsonNode categories = Json.readTree(listCategoriesByApi().data());
    if (categories.isEmpty()) {
      throw new NoSuchElementException("The catalog has no categories");
    }
    return categories.get(0).asText();
  }

  // cleanup* -> test teardown, never throws
  public static void cleanupProduct(long id) {
    try {
      adminDeleteProductByApi(id);
    } catch (RuntimeException ignored) {
      // teardown must not fail the suite
    }
  }

  private static String url(String endpoint) {
    return Config.baseApiUrl() + endpoint;
  }
}
