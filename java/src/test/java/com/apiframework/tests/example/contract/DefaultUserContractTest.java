package com.apiframework.tests.example.contract;

import static org.junit.jupiter.api.Assertions.assertTrue;

import com.apiframework.auth.AuthApi;
import com.apiframework.domain.example.ExampleApi;
import com.apiframework.domain.example.ExampleTypes.SearchItemsRequest;
import com.apiframework.fixtures.SystemAccounts;
import com.apiframework.shared.SchemaValidator;
import com.apiframework.shared.ValidationResult;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=DefaultUserContractTest
@Tag("contract")
class DefaultUserContractTest {

  @BeforeAll
  static void login() {
    AuthApi.loginAndGetCookie(SystemAccounts.DEFAULT_USER); // authenticate once per class
  }

  @Test
  void postItemsSearch_responseMatchesTheSchema() {
    // covering test {ticket-id}
    String body = ExampleApi.searchItemsRaw(new SearchItemsRequest(null, 10, 0));

    ValidationResult result =
        SchemaValidator.validate("/schemas/example/search-items-response.json", body);
    assertTrue(result.success(), () -> "Schema violations: " + result.errors());
  }
}
