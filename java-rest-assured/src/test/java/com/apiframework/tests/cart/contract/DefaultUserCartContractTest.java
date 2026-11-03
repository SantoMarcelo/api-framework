package com.apiframework.tests.cart.contract;

import static com.apiframework.support.ContractAssertions.assertContract;
import static com.apiframework.support.ContractAssertions.assertNoContent;

import com.apiframework.auth.AuthApi;
import com.apiframework.domain.cart.CartApi;
import com.apiframework.domain.cart.factories.CartPayloadFactory;
import com.apiframework.domain.products.ProductsApi;
import com.apiframework.fixtures.SystemAccounts;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=DefaultUserCartContractTest
@Tag("contract")
class DefaultUserCartContractTest {
  private long productId;

  @BeforeAll
  void setup() {
    productId = ProductsApi.getAvailableProductId(5);
  }

  @BeforeEach
  void startWithOneItem() {
    AuthApi.loginAndGetToken(SystemAccounts.DEFAULT_USER);
    CartApi.resetCartWith(productId, 1);
  }

  @AfterAll
  void cleanup() {
    AuthApi.loginAndGetToken(SystemAccounts.DEFAULT_USER);
    CartApi.clearCartByApi();
  }

  @Test
  void getCart_responseMatchesTheSchema() {
    assertContract(CartApi.getCartByApi(), 200, "cart/cart-response");
  }

  @Test
  void postCartItem_responseMatchesTheSchema() {
    assertContract(
        CartApi.addItemByApi(CartPayloadFactory.addItemWithSuccess(productId)),
        201,
        "cart/cart-response");
  }

  @Test
  void patchCartItem_responseMatchesTheSchema() {
    assertContract(
        CartApi.updateItemByApi(productId, CartPayloadFactory.updateItemQuantityWithSuccess(2)),
        200,
        "cart/cart-response");
  }

  @Test
  void deleteCartItem_responseMatchesTheSchema() {
    assertContract(CartApi.removeItemByApi(productId), 200, "cart/cart-response");
  }

  @Test
  void deleteCart_returnsNoContent() {
    assertNoContent(CartApi.clearCartByApi());
  }
}
