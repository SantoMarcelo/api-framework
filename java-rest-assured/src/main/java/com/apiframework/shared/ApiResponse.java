package com.apiframework.shared;

import io.restassured.response.Response;

/** Status + parsed body of a REST call. Domain methods suffixed {@code ByApi} return this. */
public record ApiResponse<T>(int status, T data) {

  /** Status + raw body, for contract tests that validate the body against a JSON Schema. */
  public static ApiResponse<String> raw(Response response) {
    return new ApiResponse<>(response.statusCode(), response.asString());
  }
}
