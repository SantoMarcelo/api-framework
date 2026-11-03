package com.apiframework.fixtures;

import com.apiframework.auth.UserCredentials;
import com.apiframework.config.Config;
import java.util.List;

/**
 * Test accounts. Credentials always come from environment variables — never hardcode them. To add
 * an account: add its variables to {@code .env.example}, declare it here and add it to {@link
 * #ALL} so its session is cached before the tests run.
 */
public final class SystemAccounts {
  private SystemAccounts() {}

  public static final UserCredentials DEFAULT_USER = account("DEFAULT_USER");
  public static final UserCredentials ADMIN_USER = account("ADMIN_USER");

  public static final List<UserCredentials> ALL = List.of(DEFAULT_USER, ADMIN_USER);

  private static UserCredentials account(String prefix) {
    String id = Config.env(prefix + "_ID", "0");
    return new UserCredentials(
        Long.parseLong(id),
        Config.env(prefix + "_USERNAME"),
        Config.env(prefix + "_PASSWORD"));
  }
}
