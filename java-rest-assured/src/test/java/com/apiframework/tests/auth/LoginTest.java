package com.apiframework.tests.auth;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.apiframework.auth.AuthApi;
import com.apiframework.fixtures.SystemAccounts;
import io.restassured.response.Response;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=LoginTest
@Tag("functional")
class LoginTest {

  @Test
  void loginAndGetToken_returnsATokenForAValidUser() {
    String token = AuthApi.loginAndGetToken(SystemAccounts.DEFAULT_USER);

    assertNotNull(token);
    assertFalse(token.isEmpty());
  }

  @Test
  void login_withWrongPassword_returns401InvalidCredentials() {
    Response response =
        AuthApi.loginRequest(SystemAccounts.DEFAULT_USER.userName(), "wrong-password");

    assertEquals(401, response.statusCode());
    assertEquals("INVALID_CREDENTIALS", response.jsonPath().getString("error.code"));
  }
}
