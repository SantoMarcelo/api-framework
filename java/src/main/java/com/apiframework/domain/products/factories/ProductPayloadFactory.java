package com.apiframework.domain.products.factories;

import com.apiframework.domain.products.ProductsTypes.ProductRequest;

/**
 * Payloads for the product admin. SKUs are unique per call (the API rejects duplicates with 409);
 * the category is a parameter so tests reuse one that already exists.
 */
public final class ProductPayloadFactory {
  private ProductPayloadFactory() {}

  public static ProductRequest createProductWithSuccess(String category) {
    long suffix = System.currentTimeMillis();
    return new ProductRequest(
        "QA Product " + suffix, "Created by the automation suite", 49.9, "QA-" + suffix, category, "", true, 10);
  }

  /** Full replacement body for PUT, keeping the product's SKU. */
  public static ProductRequest updateProductWithSuccess(String sku, String category) {
    return new ProductRequest(
        "QA Product updated", "Updated by the automation suite", 59.9, sku, category, "", true, null);
  }
}
