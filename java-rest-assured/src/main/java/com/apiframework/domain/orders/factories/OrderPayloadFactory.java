package com.apiframework.domain.orders.factories;

import com.apiframework.domain.orders.OrdersTypes.Address;
import com.apiframework.domain.orders.OrdersTypes.CreateOrderRequest;
import com.apiframework.domain.orders.OrdersTypes.Payment;
import com.apiframework.domain.orders.OrdersTypes.QuoteRequest;

/**
 * Checkout payloads. Simulated payment rules: card ending 0000 is approved, 1111 is declined (422),
 * 2222 is unavailable (503); PIX and BOLETO are always approved.
 */
public final class OrderPayloadFactory {
  private OrderPayloadFactory() {}

  public static QuoteRequest quoteWithoutCoupon() {
    return new QuoteRequest(null);
  }

  public static CreateOrderRequest createOrderWithPix() {
    return new CreateOrderRequest(address(), new Payment("PIX", null, null), null);
  }

  public static CreateOrderRequest createOrderWithApprovedCard() {
    return new CreateOrderRequest(
        address(), new Payment("CREDIT_CARD", "4111111111110000", "QA Automation"), null);
  }

  private static Address address() {
    return new Address("Avenida Paulista", "1000", null, "Bela Vista", "São Paulo", "SP", "01310-100");
  }
}
