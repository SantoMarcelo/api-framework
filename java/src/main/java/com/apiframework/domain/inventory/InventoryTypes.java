package com.apiframework.domain.inventory;

/**
 * Request models of the inventory endpoints. Responses are validated as raw JSON against the schemas
 * in {@code src/main/resources/schemas/inventory/}.
 */
public final class InventoryTypes {
  private InventoryTypes() {}

  public enum MovementType {
    ENTRY,
    EXIT,
    ADJUSTMENT
  }

  /** ENTRY/EXIT: {@code quantity} is the amount moved; ADJUSTMENT: it is the new stock. */
  public record StockMovementRequest(MovementType type, int quantity, String reason) {}
}
