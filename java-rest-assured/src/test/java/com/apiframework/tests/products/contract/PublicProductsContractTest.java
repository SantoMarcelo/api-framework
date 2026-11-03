package com.apiframework.tests.products.contract;

import static com.apiframework.support.ContractAssertions.assertContract;

import com.apiframework.domain.products.ProductsApi;
import java.util.Map;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=PublicProductsContractTest
@Tag("contract")
class PublicProductsContractTest {

  @Test
  void getCategories_responseMatchesTheSchema() {
    assertContract(ProductsApi.listCategoriesByApi(), 200, "products/categories-response");
  }

  @Test
  void getProducts_responseMatchesTheSchema() {
    assertContract(ProductsApi.listProductsByApi(Map.of()), 200, "products/product-page-response");
  }

  @Test
  void getProductById_responseMatchesTheSchema() {
    long productId = ProductsApi.getAvailableProductId(1);

    assertContract(ProductsApi.getProductByApi(productId), 200, "products/product-response");
  }
}
