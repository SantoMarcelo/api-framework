package com.apiframework.tests.auth;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.apiframework.auth.AuthApi;
import com.apiframework.fixtures.SystemAccounts;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=LoginTest
@Tag("functional")
class LoginTest {

  @Test
  void loginAndGetCookie_returnsASessionCookieForAValidUser() {
    String cookie = AuthApi.loginAndGetCookie(SystemAccounts.DEFAULT_USER);

    assertNotNull(cookie);
    assertFalse(cookie.isEmpty());
  }
}
