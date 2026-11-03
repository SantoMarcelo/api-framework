package com.apiframework.domain.example;

import com.apiframework.config.Config;
import com.apiframework.domain.example.ExampleTypes.CreateItemRequest;
import com.apiframework.domain.example.ExampleTypes.Item;
import com.apiframework.domain.example.ExampleTypes.SearchItemsRequest;
import com.apiframework.domain.example.ExampleTypes.UpdateItemRequest;
import com.apiframework.domain.example.ExampleTypes.UpdateItemResponse;
import com.apiframework.http.ApiClient;
import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.Endpoints.ExampleEndpoints;
import com.apiframework.shared.ExportDataRequest;
import com.apiframework.shared.Helpers;
import com.apiframework.shared.Json;
import com.apiframework.shared.UploadTypes.UploadResponse;
import io.restassured.response.Response;
import java.io.File;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

/**
 * Reference API class. All methods are static; every HTTP call goes through {@link ApiClient} and
 * every URL comes from an endpoint enum. Scope (ids, filters) is always a parameter.
 */
public final class ExampleApi {
  private ExampleApi() {}

  // search* -> POST with a filter body, returns a list
  public static List<Item> searchItems(SearchItemsRequest params) {
    return Json.parseList(searchItemsRaw(params), Item.class);
  }

  /** Raw body of the search, for contract tests that validate it against the JSON Schema. */
  public static String searchItemsRaw(SearchItemsRequest params) {
    Response response = ApiClient.post(url(ExampleEndpoints.SEARCH_ITEMS.path()), params);
    return ApiClient.requireSuccess(response).asString();
  }

  // get* -> fetch a single value; filtering lives here, never in the test
  public static Item getItemById(long id) {
    return searchItems(new SearchItemsRequest(List.of(id), 1, 0)).stream()
        .filter(candidate -> candidate.id() == id)
        .findFirst()
        .orElseThrow(() -> new NoSuchElementException("Item " + id + " not found."));
  }

  public static boolean itemExists(long id) {
    return searchItems(new SearchItemsRequest(List.of(id), 1, 0)).stream()
        .anyMatch(candidate -> candidate.id() == id);
  }

  // REST calls use the ByApi suffix and return ApiResponse<T>
  /** @param body a {@link CreateItemRequest}, or any object for negative tests */
  public static ApiResponse<Item> createItemByApi(Object body) {
    Response response = ApiClient.post(url(ExampleEndpoints.CREATE_ITEM.path()), body);
    return new ApiResponse<>(response.statusCode(), parseOrNull(response, Item.class));
  }

  /** Negative-path variant of {@link #createItemByApi}: parses the error body instead of the item. */
  public static ApiResponse<ExampleTypes.ErrorResponse> createItemErrorByApi(Object body) {
    Response response = ApiClient.post(url(ExampleEndpoints.CREATE_ITEM.path()), body);
    return new ApiResponse<>(
        response.statusCode(), Json.parse(response.asString(), ExampleTypes.ErrorResponse.class));
  }

  public static ApiResponse<UpdateItemResponse> updateItemByApi(long id, UpdateItemRequest body) {
    String endpoint = Helpers.buildEndpoint(ExampleEndpoints.UPDATE_ITEM, Map.of("id", id));
    Response response = ApiClient.patch(url(endpoint), body);
    return new ApiResponse<>(response.statusCode(), parseOrNull(response, UpdateItemResponse.class));
  }

  public static ApiResponse<String> deleteItemByApi(long id) {
    String endpoint = Helpers.buildEndpoint(ExampleEndpoints.DELETE_ITEM, Map.of("id", id));
    Response response = ApiClient.delete(url(endpoint));
    return new ApiResponse<>(response.statusCode(), response.asString());
  }

  // cleanup* -> test teardown, reuses other methods and never throws
  public static void cleanupItem(long id) {
    try {
      if (itemExists(id)) {
        deleteItemByApi(id);
      }
    } catch (RuntimeException ignored) {
      // teardown must not fail the suite
    }
  }

  // export* / download* -> bytes + saveFileIfEnabled
  public static Response exportItems(ExportDataRequest request) {
    Response response = ApiClient.post(url(ExampleEndpoints.EXPORT_ITEMS.path()), request.body());
    Helpers.saveFileIfEnabled(request.filename(), response.asByteArray());
    return response;
  }

  // upload* -> multipart with the file in the "file" field
  public static ApiResponse<UploadResponse> uploadItems(String filePath) {
    Response response =
        ApiClient.spec()
            .multiPart("file", new File(filePath))
            .post(url(ExampleEndpoints.IMPORT_ITEMS.path()));
    return new ApiResponse<>(response.statusCode(), parseOrNull(response, UploadResponse.class));
  }

  private static String url(String endpoint) {
    return Config.baseApiUrl() + endpoint;
  }

  /** Error responses have a different shape than the success model; tests read status for those. */
  private static <T> T parseOrNull(Response response, Class<T> type) {
    if (response.statusCode() < 200 || response.statusCode() >= 300 || response.asString().isBlank()) {
      return null;
    }
    return Json.parse(response.asString(), type);
  }
}
