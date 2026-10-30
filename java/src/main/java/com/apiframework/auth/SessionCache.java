package com.apiframework.auth;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

/**
 * On-disk cache of the JWTs produced by the test global setup, so each account logs in once per run
 * instead of once per test class. Tokens are keyed by the credential's userName.
 */
public final class SessionCache {
  private static final Path CACHE_PATH = Path.of(".auth-sessions.json").toAbsolutePath();
  private static final ObjectMapper MAPPER = new ObjectMapper();

  private SessionCache() {}

  public static String key(UserCredentials credentials) {
    return credentials.userName();
  }

  public static void write(Map<String, String> sessions) {
    try {
      MAPPER.writerWithDefaultPrettyPrinter().writeValue(CACHE_PATH.toFile(), sessions);
    } catch (IOException e) {
      throw new IllegalStateException("Could not write " + CACHE_PATH, e);
    }
  }

  /** Never throws: a missing or corrupt cache just means a live login is needed. */
  public static Map<String, String> read() {
    if (!Files.exists(CACHE_PATH)) {
      return new HashMap<>();
    }
    try {
      return MAPPER.readValue(CACHE_PATH.toFile(), new TypeReference<HashMap<String, String>>() {});
    } catch (IOException e) {
      return new HashMap<>();
    }
  }

  public static void clear() {
    try {
      Files.deleteIfExists(CACHE_PATH);
    } catch (IOException e) {
      throw new IllegalStateException("Could not delete " + CACHE_PATH, e);
    }
  }
}
