package com.apiframework.config;

import io.github.cdimascio.dotenv.Dotenv;
import java.nio.file.Path;

/**
 * Centralized configuration. Reads the process environment first, then the {@code .env} file in the
 * working directory (same precedence as dotenv in the TypeScript version).
 */
public final class Config {
  private static final Dotenv DOTENV = Dotenv.configure().ignoreIfMissing().load();

  private static final String BASE_URL = env("BASE_URL", "");
  private static final String BASE_API_URL = BASE_URL + env("API_BASE_PATH", "/api");

  /** JWT sent as {@code Authorization: Bearer} by {@code ApiClient}. Mutated by {@code AuthApi}. */
  private static volatile String token = env("TOKEN", "");

  private Config() {}

  /** Returns the variable, or {@code null} when it is missing or blank. */
  public static String env(String key) {
    String value = DOTENV.get(key);
    return value == null || value.isBlank() ? null : value;
  }

  public static String env(String key, String defaultValue) {
    String value = env(key);
    return value == null ? defaultValue : value;
  }

  /** Like {@link #env(String)} but fails fast with a readable message. */
  public static String requireEnv(String key) {
    String value = env(key);
    if (value == null) {
      throw new IllegalStateException("Missing required environment variable: " + key);
    }
    return value;
  }

  public static String baseUrl() {
    return BASE_URL;
  }

  /** {@code BASE_URL + API_BASE_PATH}. Endpoint enums are relative to this. */
  public static String baseApiUrl() {
    return BASE_API_URL;
  }

  public static String token() {
    return token;
  }

  public static void setToken(String value) {
    token = value == null ? "" : value;
  }

  /** Optional mTLS material (PEM). Empty strings mean "not configured". */
  public record Certs(String key, String cert, String ca) {
    public boolean hasClientCertificate() {
      return !key.isEmpty() && !cert.isEmpty();
    }
  }

  public static Certs certs() {
    return new Certs(resolve("TLS_KEY_PATH"), resolve("TLS_CERT_PATH"), resolve("TLS_CA_PATH"));
  }

  private static String resolve(String key) {
    String value = env(key);
    return value == null ? "" : Path.of(value).toAbsolutePath().normalize().toString();
  }
}
