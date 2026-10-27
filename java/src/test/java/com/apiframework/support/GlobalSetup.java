package com.apiframework.support;

import com.apiframework.auth.AuthApi;
import com.apiframework.auth.SessionCache;
import com.apiframework.auth.UserCredentials;
import com.apiframework.fixtures.SystemAccounts;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.junit.platform.launcher.LauncherSession;
import org.junit.platform.launcher.LauncherSessionListener;

/**
 * Runs once before any test (registered in {@code META-INF/services}): authenticates every account
 * and caches the sessions.
 *
 * <p>Logins run strictly sequentially. Identity providers commonly reject concurrent OAuth code
 * exchanges with {@code invalid_grant}, so this loop must never be parallelized.
 *
 * <p>A failure here is not fatal: the account is simply absent from the cache and the test that
 * needs it falls back to logging in on demand.
 */
public class GlobalSetup implements LauncherSessionListener {

  @Override
  public void launcherSessionOpened(LauncherSession session) {
    Map<String, String> sessions = new HashMap<>();
    List<String> failed = new ArrayList<>();

    for (UserCredentials credentials : SystemAccounts.ALL) {
      if (!credentials.isComplete()) {
        continue; // not every environment has all accounts provisioned
      }
      try {
        sessions.put(SessionCache.key(credentials), AuthApi.loginAndGetCookie(credentials));
      } catch (RuntimeException e) {
        failed.add(credentials.userName() + ": " + e.getMessage());
      }
    }

    SessionCache.write(sessions);

    System.out.printf("%n[auth] cached %d/%d sessions%n", sessions.size(), SystemAccounts.ALL.size());
    if (!failed.isEmpty()) {
      System.err.println(
          "[auth] failed to pre-authenticate (tests will log in on demand):\n  - "
              + String.join("\n  - ", failed));
    }
  }
}
