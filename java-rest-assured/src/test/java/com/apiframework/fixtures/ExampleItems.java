package com.apiframework.fixtures;

/**
 * Entities are REAL records of the test environment — never invented IDs. Replace this example
 * with the records your tests depend on (projects, sites, users, ...).
 */
public final class ExampleItems {
  private ExampleItems() {}

  public record Entity(long id, String name) {}

  public static final Entity ITEM_A = new Entity(1, "Item A");
  public static final Entity ITEM_B = new Entity(2, "Item B");
}
