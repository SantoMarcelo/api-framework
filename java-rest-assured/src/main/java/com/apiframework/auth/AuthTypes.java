package com.apiframework.auth;

/**
 * Request models of the auth endpoints. Responses are validated as raw JSON against the schemas in
 * {@code src/main/resources/schemas/auth/}.
 */
public final class AuthTypes {
  private AuthTypes() {}

  public record RegisterRequest(String name, String email, String password) {}
}
