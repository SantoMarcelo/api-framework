package com.apiframework.fixtures;

import java.net.URISyntaxException;
import java.nio.file.Path;

/** Absolute paths of the files used by upload tests of the {@code example} domain. */
public final class ExampleFixturePaths {
  private ExampleFixturePaths() {}

  public static final String IMPORT_ITEMS_WITH_SUCCESS =
      resource("/fixtures/example/upload/import-items-with-success.xlsx");

  private static String resource(String classpathLocation) {
    try {
      return Path.of(ExampleFixturePaths.class.getResource(classpathLocation).toURI()).toString();
    } catch (URISyntaxException | NullPointerException e) {
      throw new IllegalStateException("Fixture not found on classpath: " + classpathLocation, e);
    }
  }
}
