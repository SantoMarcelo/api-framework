package com.apiframework.tests.products.contract;

import static com.apiframework.support.ContractAssertions.assertContract;
import static com.apiframework.support.ContractAssertions.assertNoContent;

import com.apiframework.auth.AuthApi;
import com.apiframework.domain.products.ProductsApi;
import com.apiframework.domain.products.ProductsTypes.ProductRequest;
import com.apiframework.domain.products.factories.ProductPayloadFactory;
import com.apiframework.fixtures.SystemAccounts;
import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.Json;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=AdminProductsContractTest
@Tag("contract")
class AdminProductsContractTest {
  private String category;
  private final List<Long> createdProducts = new ArrayList<>();

  @BeforeAll
  void login() {
    AuthApi.loginAndGetToken(SystemAccounts.ADMIN_USER);
    category = ProductsApi.getAnyCategory();
  }

  @AfterAll
  void cleanup() {
    AuthApi.loginAndGetToken(SystemAccounts.ADMIN_USER);
    createdProducts.forEach(ProductsApi::cleanupProduct);
  }

  @Test
  void getAdminProducts_responseMatchesTheSchema() {
    assertContract(ProductsApi.adminListProductsByApi(Map.of()), 200, "products/product-page-response");
  }

  @Test
  void getAdminProductById_responseMatchesTheSchema() {
    long productId = createProduct();

    assertContract(ProductsApi.adminGetProductByApi(productId), 200, "products/product-response");
  }

  @Test
  void postAdminProduct_responseMatchesTheSchema() {
    ApiResponse<String> response =
        ProductsApi.adminCreateProductByApi(ProductPayloadFactory.createProductWithSuccess(category));
    if (response.status() == 201) {
      createdProducts.add(Json.readTree(response.data()).get("id").asLong());
    }

    assertContract(response, 201, "products/product-response");
  }

  @Test
  void putAdminProduct_responseMatchesTheSchema() {
    ProductRequest product = ProductPayloadFactory.createProductWithSuccess(category);
    long productId = createProduct(product);

    ApiResponse<String> response =
        ProductsApi.adminUpdateProductByApi(
            productId, ProductPayloadFactory.updateProductWithSuccess(product.sku(), category));

    assertContract(response, 200, "products/product-response");
  }

  @Test
  void deleteAdminProduct_returnsNoContent() {
    long productId = createProduct();

    assertNoContent(ProductsApi.adminDeleteProductByApi(productId));
  }

  private long createProduct() {
    return createProduct(ProductPayloadFactory.createProductWithSuccess(category));
  }

  private long createProduct(ProductRequest body) {
    long id = ProductsApi.createProduct(body);
    createdProducts.add(id);
    return id;
  }
}
