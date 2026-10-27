package com.apiframework.shared;

/**
 * Endpoint enums.
 *
 * <p>One enum per domain/feature, values are paths relative to {@code Config.baseApiUrl()}. Never
 * hardcode URL strings elsewhere — reference these enums. Path parameters use the {@code {param}}
 * syntax and are resolved with {@link Helpers#buildEndpoint}.
 */
public final class Endpoints {
  private Endpoints() {}

  // Example (replace with your own domains)
  public enum ExampleEndpoints implements Endpoint {
    SEARCH_ITEMS("/items/search"),
    CREATE_ITEM("/items"),
    UPDATE_ITEM("/items/{id}"),
    DELETE_ITEM("/items/{id}"),
    EXPORT_ITEMS("/items/export"),
    IMPORT_ITEMS("/items/import");

    private final String path;

    ExampleEndpoints(String path) {
      this.path = path;
    }

    @Override
    public String path() {
      return path;
    }
  }
}
