package com.apiframework.tests.example.upload;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.apiframework.auth.AuthApi;
import com.apiframework.domain.example.ExampleApi;
import com.apiframework.fixtures.ExampleFixturePaths;
import com.apiframework.fixtures.SystemAccounts;
import com.apiframework.shared.ApiResponse;
import com.apiframework.shared.UploadTypes.UploadResponse;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=DefaultUserUploadTest
@Tag("document-files")
class DefaultUserUploadTest {

  @BeforeAll
  static void login() {
    AuthApi.loginAndGetCookie(SystemAccounts.DEFAULT_USER);
  }

  @Test
  void postItemsImport_importItemsWithSuccess() {
    // covering test {ticket-id}
    ApiResponse<UploadResponse> response =
        ExampleApi.uploadItems(ExampleFixturePaths.IMPORT_ITEMS_WITH_SUCCESS);

    assertEquals(200, response.status());
    assertTrue(response.data().errorsOrEmpty().isEmpty());
  }
}
