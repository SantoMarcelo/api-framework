package com.apiframework.tests.auth.contract;

import static com.apiframework.support.ContractAssertions.assertContract;

import com.apiframework.auth.AuthApi;
import com.apiframework.auth.factories.RegisterPayloadFactory;
import com.apiframework.fixtures.SystemAccounts;
import com.apiframework.shared.ApiResponse;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=PublicAuthContractTest
@Tag("contract")
class PublicAuthContractTest {

  @Test
  void postRegister_responseMatchesTheSchema() {
    ApiResponse<String> response = AuthApi.registerByApi(RegisterPayloadFactory.registerWithSuccess());

    assertContract(response, 201, "auth/auth-session-response");
  }

  @Test
  void postLogin_responseMatchesTheSchema() {
    ApiResponse<String> response =
        ApiResponse.raw(
            AuthApi.loginRequest(
                SystemAccounts.DEFAULT_USER.userName(), SystemAccounts.DEFAULT_USER.password()));

    assertContract(response, 200, "auth/auth-session-response");
  }

  @Test
  void postLogin_withWrongPassword_errorMatchesTheSchema() {
    ApiResponse<String> response =
        ApiResponse.raw(AuthApi.loginRequest(SystemAccounts.DEFAULT_USER.userName(), "wrong-password"));

    assertContract(response, 401, "shared/error-response");
  }
}
