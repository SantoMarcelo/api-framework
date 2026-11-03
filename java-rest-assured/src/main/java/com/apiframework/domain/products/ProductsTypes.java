package com.apiframework.domain.products;

/**
 * Request models of the products endpoints. Responses are validated as raw JSON against the schemas
 * in {@code src/main/resources/schemas/products/}.
 */
public final class ProductsTypes {
  private ProductsTypes() {}

  /**
   * Body of create (POST) and update (PUT). {@code stock} is only accepted on create; null fields are
   * not serialized, so the backend defaults apply.
   */
  public record ProductRequest(
      String name,
      String description,
      Double price,
      String sku,
      String category,
      String imageUrl,
      Boolean active,
      Integer stock) {}
}
