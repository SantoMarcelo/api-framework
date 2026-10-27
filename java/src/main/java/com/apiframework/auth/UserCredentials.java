package com.apiframework.auth;

/** Credentials of a test account. Values always come from environment variables. */
public record UserCredentials(long userId, String secret, String userName, String password) {

  /** True when the account is provisioned in the current environment. */
  public boolean isComplete() {
    return notBlank(userName) && notBlank(password) && notBlank(secret);
  }

  private static boolean notBlank(String value) {
    return value != null && !value.isBlank();
  }
}
