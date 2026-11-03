package com.apiframework.domain.cart;

/**
 * Request models of the cart endpoints. Responses are validated as raw JSON against the schemas in
 * {@code src/main/resources/schemas/cart/}.
 */
public final class CartTypes {
  private CartTypes() {}

  public record AddCartItemRequest(long productId, int quantity) {}

  public record UpdateCartItemRequest(int quantity) {}
}
