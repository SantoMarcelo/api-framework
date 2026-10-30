package com.apiframework.auth.factories;

import com.apiframework.auth.AuthTypes.RegisterRequest;

/** Payloads for {@code POST /auth/register}. Every call yields a new, unused e-mail. */
public final class RegisterPayloadFactory {
  private RegisterPayloadFactory() {}

  public static RegisterRequest registerWithSuccess() {
    long suffix = System.currentTimeMillis();
    return new RegisterRequest("QA Automation " + suffix, "qa" + suffix + "@loja.com", "Senha@1234");
  }
}
