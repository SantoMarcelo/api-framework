package com.apiframework.tests.testutils.contract;

import static com.apiframework.support.ContractAssertions.assertContract;

import com.apiframework.domain.testutils.TestUtilsApi;
import com.apiframework.domain.testutils.TestUtilsTypes.ExpiredTokenRequest;
import com.apiframework.domain.testutils.TestUtilsTypes.TokenRequest;
import com.apiframework.fixtures.SystemAccounts;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

// mvn test -Dtest=PublicTestUtilsContractTest
@Tag("contract")
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class PublicTestUtilsContractTest {

  @Test
  @Order(1)
  void postSeed_responseMatchesTheSchema() {
    assertContract(TestUtilsApi.seedDatabaseByApi(), 200, "testutils/message-response");
  }

  @Test
  @Order(1)
  void postToken_responseMatchesTheSchema() {
    TokenRequest body = new TokenRequest(SystemAccounts.DEFAULT_USER.userName(), 60);

    assertContract(TestUtilsApi.generateTokenByApi(body), 201, "testutils/token-response");
  }

  @Test
  @Order(1)
  void postExpiredToken_responseMatchesTheSchema() {
    ExpiredTokenRequest body = new ExpiredTokenRequest(SystemAccounts.DEFAULT_USER.userName());

    assertContract(TestUtilsApi.generateExpiredTokenByApi(body), 201, "testutils/token-response");
  }

  /**
   * Wipes the database and reloads the seed: anything created outside the seed is lost. The seed
   * users keep their ids, so cached tokens stay valid. Runs last in this class.
   */
  @Test
  @Order(2)
  void postReset_responseMatchesTheSchema() {
    assertContract(TestUtilsApi.resetDatabaseByApi(), 200, "testutils/message-response");
  }
}
