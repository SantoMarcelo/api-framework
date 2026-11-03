package com.apiframework.domain.orders;

/**
 * Request models of checkout and orders. Responses are validated as raw JSON against the schemas in
 * {@code src/main/resources/schemas/orders/}.
 */
public final class OrdersTypes {
  private OrdersTypes() {}

  public record QuoteRequest(String couponCode) {}

  public record Address(
      String street,
      String number,
      String complement,
      String district,
      String city,
      String state,
      String zip) {}

  /** {@code method} is CREDIT_CARD, PIX or BOLETO; the card fields are only sent for CREDIT_CARD. */
  public record Payment(String method, String cardNumber, String cardHolder) {}

  public record CreateOrderRequest(Address address, Payment payment, String couponCode) {}
}
