package com.apiframework.tests.orders.contract;

import static com.apiframework.support.ContractAssertions.assertContract;

import com.apiframework.auth.AuthApi;
import com.apiframework.domain.cart.CartApi;
import com.apiframework.domain.orders.OrdersApi;
import com.apiframework.domain.orders.factories.OrderPayloadFactory;
import com.apiframework.domain.products.ProductsApi;
import com.apiframework.fixtures.SystemAccounts;
import java.util.Map;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=AdminOrdersContractTest
@Tag("contract")
class AdminOrdersContractTest {
  private long orderId;
  private long orderToCancel;

  @BeforeAll
  void setup() {
    // orders are placed by a customer, then inspected by the admin
    long productId = ProductsApi.getAvailableProductId(5);
    AuthApi.loginAndGetToken(SystemAccounts.DEFAULT_USER);
    CartApi.resetCartWith(productId, 1);
    orderId = OrdersApi.createOrder(OrderPayloadFactory.createOrderWithPix());
    CartApi.resetCartWith(productId, 1);
    orderToCancel = OrdersApi.createOrder(OrderPayloadFactory.createOrderWithPix());

    AuthApi.loginAndGetToken(SystemAccounts.ADMIN_USER);
  }

  @AfterAll
  void cleanup() {
    AuthApi.loginAndGetToken(SystemAccounts.DEFAULT_USER);
    OrdersApi.cleanupOrder(orderId);
    OrdersApi.cleanupOrder(orderToCancel);
  }

  @Test
  void getAdminOrders_responseMatchesTheSchema() {
    assertContract(OrdersApi.adminListOrdersByApi(Map.of()), 200, "orders/order-page-response");
  }

  @Test
  void getAdminOrderById_responseMatchesTheSchema() {
    assertContract(OrdersApi.adminGetOrderByApi(orderId), 200, "orders/order-response");
  }

  @Test
  void postAdminOrderCancel_responseMatchesTheSchema() {
    assertContract(OrdersApi.adminCancelOrderByApi(orderToCancel), 200, "orders/order-response");
  }
}
