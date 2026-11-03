package com.apiframework.support;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.SchemaValidator;
import com.apiframework.shared.ValidationResult;

/** Status + JSON Schema check shared by every contract test. */
public final class ContractAssertions {
  private ContractAssertions() {}

  /**
   * @param schema classpath location under {@code /schemas}, e.g. {@code products/product-response}
   */
  public static void assertContract(ApiResponse<String> response, int expectedStatus, String schema) {
    assertEquals(expectedStatus, response.status(), () -> "Unexpected status. Body: " + response.data());

    ValidationResult result = SchemaValidator.validate("/schemas/" + schema + ".json", response.data());
    assertTrue(result.success(), () -> "Schema violations: " + result.errors() + "\nBody: " + response.data());
  }

  /** For 204 responses: status only, and the body must be empty. */
  public static void assertNoContent(ApiResponse<String> response) {
    assertEquals(204, response.status(), () -> "Unexpected status. Body: " + response.data());
    assertTrue(response.data().isEmpty(), () -> "Expected an empty body, got: " + response.data());
  }
}
