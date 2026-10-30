package com.apiframework.tests.orders.contract;

import static com.apiframework.support.ContractAssertions.assertContract;

import com.apiframework.auth.AuthApi;
import com.apiframework.domain.cart.CartApi;
import com.apiframework.domain.orders.OrdersApi;
import com.apiframework.domain.orders.factories.OrderPayloadFactory;
import com.apiframework.domain.products.ProductsApi;
import com.apiframework.fixtures.SystemAccounts;
import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.Json;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=DefaultUserOrdersContractTest
@Tag("contract")
class DefaultUserOrdersContractTest {
  private long productId;
  private long orderId;
  private final List<Long> createdOrders = new ArrayList<>();

  @BeforeAll
  void setup() {
    productId = ProductsApi.getAvailableProductId(5);
    AuthApi.loginAndGetToken(SystemAccounts.DEFAULT_USER);
    orderId = placeOrder();
  }

  @BeforeEach
  void login() {
    AuthApi.loginAndGetToken(SystemAccounts.DEFAULT_USER);
  }

  @AfterAll
  void cleanup() {
    // cancelling gives the stock back; orders already cancelled just answer 409
    AuthApi.loginAndGetToken(SystemAccounts.DEFAULT_USER);
    createdOrders.forEach(OrdersApi::cleanupOrder);
    CartApi.clearCartByApi();
  }

  @Test
  void postCheckoutQuote_responseMatchesTheSchema() {
    CartApi.resetCartWith(productId, 1);

    assertContract(
        OrdersApi.quoteCheckoutByApi(OrderPayloadFactory.quoteWithoutCoupon()),
        200,
        "orders/quote-response");
  }

  @Test
  void postOrder_responseMatchesTheSchema() {
    CartApi.resetCartWith(productId, 1);

    ApiResponse<String> response =
        OrdersApi.createOrderByApi(OrderPayloadFactory.createOrderWithApprovedCard());
    if (response.status() == 201) {
      createdOrders.add(Json.readTree(response.data()).get("id").asLong());
    }

    assertContract(response, 201, "orders/order-response");
  }

  @Test
  void getOrders_responseMatchesTheSchema() {
    assertContract(OrdersApi.listOrdersByApi(Map.of()), 200, "orders/order-page-response");
  }

  @Test
  void getOrderById_responseMatchesTheSchema() {
    assertContract(OrdersApi.getOrderByApi(orderId), 200, "orders/order-response");
  }

  @Test
  void postOrderCancel_responseMatchesTheSchema() {
    long paidOrder = placeOrder();

    assertContract(OrdersApi.cancelOrderByApi(paidOrder), 200, "orders/order-response");
  }

  private long placeOrder() {
    CartApi.resetCartWith(productId, 1);
    long id = OrdersApi.createOrder(OrderPayloadFactory.createOrderWithPix());
    createdOrders.add(id);
    return id;
  }
}
