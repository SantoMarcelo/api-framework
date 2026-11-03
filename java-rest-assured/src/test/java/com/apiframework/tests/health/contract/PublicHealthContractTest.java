package com.apiframework.tests.health.contract;

import static com.apiframework.support.ContractAssertions.assertContract;

import com.apiframework.domain.health.HealthApi;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=PublicHealthContractTest
@Tag("contract")
class PublicHealthContractTest {

  @Test
  void getHealth_responseMatchesTheSchema() {
    assertContract(HealthApi.getHealthByApi(), 200, "health/health-response");
  }
}
