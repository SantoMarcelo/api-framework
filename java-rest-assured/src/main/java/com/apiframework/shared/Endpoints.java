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

  // Loja QA API (API_BASE_PATH=/api, so the version prefix is part of each path)
  public enum HealthEndpoints implements Endpoint {
    HEALTH("/health");

    private final String path;

    HealthEndpoints(String path) {
      this.path = path;
    }

    @Override
    public String path() {
      return path;
    }
  }

  public enum AuthEndpoints implements Endpoint {
    REGISTER("/v1/auth/register"),
    LOGIN("/v1/auth/login"),
    LOGOUT("/v1/auth/logout"),
    ME("/v1/auth/me");

    private final String path;

    AuthEndpoints(String path) {
      this.path = path;
    }

    @Override
    public String path() {
      return path;
    }
  }

  public enum ProductEndpoints implements Endpoint {
    LIST_CATEGORIES("/v1/categories"),
    LIST_PRODUCTS("/v1/products"),
    GET_PRODUCT("/v1/products/{id}"),
    ADMIN_LIST_PRODUCTS("/v1/admin/products"),
    ADMIN_CREATE_PRODUCT("/v1/admin/products"),
    ADMIN_GET_PRODUCT("/v1/admin/products/{id}"),
    ADMIN_UPDATE_PRODUCT("/v1/admin/products/{id}"),
    ADMIN_DELETE_PRODUCT("/v1/admin/products/{id}");

    private final String path;

    ProductEndpoints(String path) {
      this.path = path;
    }

    @Override
    public String path() {
      return path;
    }
  }

  public enum InventoryEndpoints implements Endpoint {
    REGISTER_STOCK_MOVEMENT("/v1/admin/products/{id}/stock"),
    LIST_STOCK_MOVEMENTS("/v1/admin/stock/movements");

    private final String path;

    InventoryEndpoints(String path) {
      this.path = path;
    }

    @Override
    public String path() {
      return path;
    }
  }

  public enum DashboardEndpoints implements Endpoint {
    GET_DASHBOARD("/v1/admin/dashboard");

    private final String path;

    DashboardEndpoints(String path) {
      this.path = path;
    }

    @Override
    public String path() {
      return path;
    }
  }

  public enum CartEndpoints implements Endpoint {
    GET_CART("/v1/cart"),
    CLEAR_CART("/v1/cart"),
    ADD_ITEM("/v1/cart/items"),
    UPDATE_ITEM("/v1/cart/items/{productId}"),
    REMOVE_ITEM("/v1/cart/items/{productId}");

    private final String path;

    CartEndpoints(String path) {
      this.path = path;
    }

    @Override
    public String path() {
      return path;
    }
  }

  public enum OrderEndpoints implements Endpoint {
    QUOTE_CHECKOUT("/v1/checkout/quote"),
    CREATE_ORDER("/v1/orders"),
    LIST_ORDERS("/v1/orders"),
    GET_ORDER("/v1/orders/{id}"),
    CANCEL_ORDER("/v1/orders/{id}/cancel"),
    ADMIN_LIST_ORDERS("/v1/admin/orders"),
    ADMIN_GET_ORDER("/v1/admin/orders/{id}"),
    ADMIN_CANCEL_ORDER("/v1/admin/orders/{id}/cancel");

    private final String path;

    OrderEndpoints(String path) {
      this.path = path;
    }

    @Override
    public String path() {
      return path;
    }
  }

  public enum TestUtilsEndpoints implements Endpoint {
    RESET("/test/reset"),
    SEED("/test/seed"),
    TOKEN("/test/token"),
    EXPIRED_TOKEN("/test/expired-token");

    private final String path;

    TestUtilsEndpoints(String path) {
      this.path = path;
    }

    @Override
    public String path() {
      return path;
    }
  }

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
