package com.apiframework.domain.example.factories;

import com.apiframework.domain.example.ExampleTypes.CreateItemRequest;
import com.apiframework.domain.example.ExampleTypes.UpdateItemRequest;
import java.util.Map;

/**
 * Payload factory for actions (CRUD / inline mutations).
 *
 * <ul>
 *   <li>{@code create[Action]WithSuccess()} -> happy path, {@code create[Action]WithErrors()} ->
 *       validation error
 *   <li>Scope and runtime ids are parameters, never hardcoded.
 * </ul>
 */
public final class ExampleFactory {
  private ExampleFactory() {}

  public static CreateItemRequest createItemWithSuccess() {
    return createItemWithSuccess("Item " + System.currentTimeMillis());
  }

  public static CreateItemRequest createItemWithSuccess(String name) {
    return new CreateItemRequest(name, 1);
  }

  /** Wrong types on purpose, so it is a Map instead of the typed request. */
  public static Map<String, Object> createItemWithErrors() {
    return Map.of("name", 123, "quantity", "invalid");
  }

  public static UpdateItemRequest updateItemQuantityWithSuccess(int quantity) {
    return new UpdateItemRequest(null, quantity);
  }
}
