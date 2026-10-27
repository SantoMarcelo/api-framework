package com.apiframework.tests.example.actions;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.apiframework.auth.AuthApi;
import com.apiframework.domain.example.ExampleApi;
import com.apiframework.domain.example.ExampleTypes.CreateItemRequest;
import com.apiframework.domain.example.ExampleTypes.ErrorResponse;
import com.apiframework.domain.example.ExampleTypes.Item;
import com.apiframework.domain.example.ExampleTypes.UpdateItemResponse;
import com.apiframework.domain.example.factories.ExampleFactory;
import com.apiframework.fixtures.SystemAccounts;
import com.apiframework.shared.ApiResponse;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

// mvn test -Dtest=DefaultUserActionsTest
@Tag("functional")
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class DefaultUserActionsTest {
  private static long createdItemId;

  @BeforeAll
  static void login() {
    AuthApi.loginAndGetCookie(SystemAccounts.DEFAULT_USER);
  }

  @AfterAll
  static void cleanup() {
    if (createdItemId != 0) {
      ExampleApi.cleanupItem(createdItemId);
    }
  }

  @Test
  @Order(1)
  void postItems_createItemWithSuccess() {
    // covering test {ticket-id}
    CreateItemRequest payload = ExampleFactory.createItemWithSuccess();
    ApiResponse<Item> response = ExampleApi.createItemByApi(payload);

    assertEquals(201, response.status());
    assertNotNull(response.data());
    assertEquals(payload.name(), response.data().name());
    createdItemId = response.data().id();
  }

  @Test
  @Order(2)
  void patchItemsById_updateQuantityWithSuccess() {
    // covering test {ticket-id}
    ApiResponse<UpdateItemResponse> response =
        ExampleApi.updateItemByApi(createdItemId, ExampleFactory.updateItemQuantityWithSuccess(5));

    assertEquals(200, response.status());
    UpdateItemResponse body = response.data();
    assertTrue(body.failures().isEmpty(), "a 200 with failures is a silent partial failure");
    assertEquals(1, body.successes().size());
    assertEquals(5, body.data().get(0).quantity());
  }

  @Test
  @Order(3)
  void postItems_createItemWithInvalidInput() {
    // covering test {ticket-id}
    ApiResponse<ErrorResponse> response =
        ExampleApi.createItemErrorByApi(ExampleFactory.createItemWithErrors());

    // REST Assured does not throw on 4xx, so the status assertion is the false-positive guard
    assertEquals(400, response.status());
    assertFalse(response.data().errors().isEmpty());
  }

  @Test
  @Order(4)
  void deleteItemsById_deleteItemWithSuccess() {
    // covering test {ticket-id}
    ApiResponse<String> response = ExampleApi.deleteItemByApi(createdItemId);

    assertEquals(200, response.status());
    assertFalse(ExampleApi.itemExists(createdItemId));
    createdItemId = 0;
  }
}
