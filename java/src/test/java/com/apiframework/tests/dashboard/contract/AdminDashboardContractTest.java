package com.apiframework.tests.dashboard.contract;

import static com.apiframework.support.ContractAssertions.assertContract;

import com.apiframework.auth.AuthApi;
import com.apiframework.domain.dashboard.DashboardApi;
import com.apiframework.fixtures.SystemAccounts;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

// mvn test -Dtest=AdminDashboardContractTest
@Tag("contract")
class AdminDashboardContractTest {

  @BeforeAll
  void login() {
    AuthApi.loginAndGetToken(SystemAccounts.ADMIN_USER);
  }

  @Test
  void getDashboard_responseMatchesTheSchema() {
    assertContract(DashboardApi.getDashboardByApi(), 200, "dashboard/dashboard-response");
  }
}
