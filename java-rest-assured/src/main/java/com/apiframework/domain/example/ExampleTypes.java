package com.apiframework.domain.example;

import java.util.List;

/**
 * Request/response models of the example domain, as records. The matching JSON Schemas used by
 * contract tests live in {@code src/main/resources/schemas/example/}. Each model is self-contained:
 * fields are always declared inline, never composed from shared helper types.
 */
public final class ExampleTypes {
  private ExampleTypes() {}

  public record SearchItemsRequest(List<Long> ids, int limit, int offset) {}

  public record Item(long id, String name, int quantity) {}

  public record CreateItemRequest(String name, int quantity) {}

  public record UpdateItemRequest(String name, Integer quantity) {}

  // Mutations (PATCH/PUT) respond with data + successes + failures
  public record ResourceInfo(String name, List<String> fields) {}

  public record ErrorDetail(int statusCode, String title, String detail, String code) {}

  public record Success(ResourceInfo resource) {}

  public record Failure(ResourceInfo resource, List<ErrorDetail> errors) {}

  public record UpdateItemResponse(List<Item> data, List<Success> successes, List<Failure> failures) {}

  public record ErrorResponse(List<ErrorDetail> errors) {}
}
