package com.apiframework.domain.inventory.factories;

import com.apiframework.domain.inventory.InventoryTypes.MovementType;
import com.apiframework.domain.inventory.InventoryTypes.StockMovementRequest;

public final class StockMovementPayloadFactory {
  private StockMovementPayloadFactory() {}

  public static StockMovementRequest stockEntryWithSuccess(int quantity) {
    return new StockMovementRequest(MovementType.ENTRY, quantity, "QA automation stock entry");
  }
}
