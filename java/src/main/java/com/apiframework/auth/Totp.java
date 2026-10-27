package com.apiframework.auth;

import java.nio.ByteBuffer;
import java.security.GeneralSecurityException;
import java.time.Instant;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.codec.binary.Base32;

/** RFC 6238 TOTP (HMAC-SHA1, 6 digits, 30s step) — what authenticator apps generate. */
public final class Totp {
  private static final int STEP_SECONDS = 30;
  private static final int DIGITS = 6;

  private Totp() {}

  /** @param base32Secret the account's {@code *_SECRETKEY}; spaces and case are ignored */
  public static String generate(String base32Secret) {
    return generate(base32Secret, Instant.now());
  }

  static String generate(String base32Secret, Instant at) {
    byte[] key = new Base32().decode(base32Secret.replace(" ", "").toUpperCase());
    long counter = at.getEpochSecond() / STEP_SECONDS;
    try {
      Mac mac = Mac.getInstance("HmacSHA1");
      mac.init(new SecretKeySpec(key, "HmacSHA1"));
      byte[] hash = mac.doFinal(ByteBuffer.allocate(8).putLong(counter).array());

      int offset = hash[hash.length - 1] & 0x0F;
      int binary =
          ((hash[offset] & 0x7F) << 24)
              | ((hash[offset + 1] & 0xFF) << 16)
              | ((hash[offset + 2] & 0xFF) << 8)
              | (hash[offset + 3] & 0xFF);
      int otp = binary % (int) Math.pow(10, DIGITS);
      return String.format("%0" + DIGITS + "d", otp);
    } catch (GeneralSecurityException e) {
      throw new IllegalStateException("Could not generate TOTP code", e);
    }
  }
}
