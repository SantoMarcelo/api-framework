package com.apiframework.domain.cart.factories;

import com.apiframework.domain.cart.CartTypes.AddCartItemRequest;
import com.apiframework.domain.cart.CartTypes.UpdateCartItemRequest;

/** Cart payloads. The product id always comes from the test (looked up at runtime). */
public final class CartPayloadFactory {
  private CartPayloadFactory() {}

  public static AddCartItemRequest addItemWithSuccess(long productId) {
    return new AddCartItemRequest(productId, 1);
  }

  public static UpdateCartItemRequest updateItemQuantityWithSuccess(int quantity) {
    return new UpdateCartItemRequest(quantity);
  }
}
