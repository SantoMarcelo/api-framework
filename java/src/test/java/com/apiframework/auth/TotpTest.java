package com.apiframework.auth;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.Instant;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

@Tag("unit")
class TotpTest {
  // RFC 6238 appendix B: ASCII secret "12345678901234567890", T=59s -> 94287082 (8 digits)
  private static final String SECRET = "GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ";

  @Test
  void generatesTheRfc6238Vector() {
    assertEquals("287082", Totp.generate(SECRET, Instant.ofEpochSecond(59)));
  }

  @Test
  void ignoresSpacesAndCaseInTheSecret() {
    assertEquals(
        "287082",
        Totp.generate("gezd gnbv gy3t qojq gezd gnbv gy3t qojq", Instant.ofEpochSecond(59)));
  }
}
