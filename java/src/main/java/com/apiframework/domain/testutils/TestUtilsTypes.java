package com.apiframework.domain.testutils;

/** Request models of the test-only endpoints ({@code /api/test}, unavailable in production). */
public final class TestUtilsTypes {
  private TestUtilsTypes() {}

  /** A negative or zero {@code expiresInSeconds} yields an already expired token. */
  public record TokenRequest(String email, Integer expiresInSeconds) {}

  public record ExpiredTokenRequest(String email) {}
}
