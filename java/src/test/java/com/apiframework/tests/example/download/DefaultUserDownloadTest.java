package com.apiframework.tests.example.download;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.apiframework.auth.AuthApi;
import com.apiframework.domain.example.ExampleApi;
import com.apiframework.domain.example.factories.ExportPayloadFactory;
import com.apiframework.fixtures.ExampleItems;
import com.apiframework.fixtures.SystemAccounts;
import com.apiframework.shared.ExportDataRequest;
import io.restassured.response.Response;
import java.util.List;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=DefaultUserDownloadTest
@Tag("document-files")
class DefaultUserDownloadTest {

  @BeforeAll
  static void login() {
    AuthApi.loginAndGetCookie(SystemAccounts.DEFAULT_USER);
  }

  @Test
  void postItemsExport_downloadItemsSpreadsheet() {
    // covering test {ticket-id}
    Response response =
        ExampleApi.exportItems(
            new ExportDataRequest(
                ExportPayloadFactory.createExportItemsWithSuccess(List.of(ExampleItems.ITEM_A.id())),
                "items-export.xlsx"));

    assertEquals(200, response.statusCode());
    assertTrue(response.contentType().contains("spreadsheetml"));
    assertTrue(response.asByteArray().length > 0);
  }
}
