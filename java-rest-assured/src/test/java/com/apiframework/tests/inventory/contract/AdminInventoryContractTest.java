package com.apiframework.tests.inventory.contract;

import static com.apiframework.support.ContractAssertions.assertContract;

import com.apiframework.auth.AuthApi;
import com.apiframework.domain.inventory.InventoryApi;
import com.apiframework.domain.inventory.factories.StockMovementPayloadFactory;
import com.apiframework.domain.products.ProductsApi;
import com.apiframework.domain.products.factories.ProductPayloadFactory;
import com.apiframework.fixtures.SystemAccounts;
import java.util.Map;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=AdminInventoryContractTest
@Tag("contract")
class AdminInventoryContractTest {
  // stock movements go to a product owned by this class, never to the seed catalog
  private long productId;

  @BeforeAll
  void setup() {
    AuthApi.loginAndGetToken(SystemAccounts.ADMIN_USER);
    productId =
        ProductsApi.createProduct(
            ProductPayloadFactory.createProductWithSuccess(ProductsApi.getAnyCategory()));
  }

  @AfterAll
  void cleanup() {
    AuthApi.loginAndGetToken(SystemAccounts.ADMIN_USER);
    ProductsApi.cleanupProduct(productId);
  }

  @Test
  void postStockMovement_responseMatchesTheSchema() {
    assertContract(
        InventoryApi.registerStockMovementByApi(
            productId, StockMovementPayloadFactory.stockEntryWithSuccess(5)),
        201,
        "inventory/stock-movement-response");
  }

  @Test
  void getStockMovements_responseMatchesTheSchema() {
    // the product was created with stock > 0, so it has at least its initial ENTRY movement
    assertContract(
        InventoryApi.listStockMovementsByApi(Map.of("productId", productId)),
        200,
        "inventory/stock-movement-page-response");
  }
}
