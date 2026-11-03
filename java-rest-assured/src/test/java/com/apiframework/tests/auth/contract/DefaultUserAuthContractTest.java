package com.apiframework.tests.auth.contract;

import static com.apiframework.support.ContractAssertions.assertContract;
import static com.apiframework.support.ContractAssertions.assertNoContent;

import com.apiframework.auth.AuthApi;
import com.apiframework.fixtures.SystemAccounts;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=DefaultUserAuthContractTest
@Tag("contract")
class DefaultUserAuthContractTest {

  @BeforeEach
  void login() {
    AuthApi.loginAndGetToken(SystemAccounts.DEFAULT_USER);
  }

  @Test
  void getMe_responseMatchesTheSchema() {
    assertContract(AuthApi.getMeByApi(), 200, "auth/user-response");
  }

  @Test
  void postLogout_returnsNoContent() {
    assertNoContent(AuthApi.logoutByApi());
  }
}
