package com.apiframework.shared;

import com.apiframework.config.Config;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

public final class Helpers {
  private Helpers() {}

  /** Resolves {@code {param}} placeholders of an endpoint. */
  public static String buildEndpoint(Endpoint endpoint, Map<String, ?> pathParams) {
    return buildEndpoint(endpoint, pathParams, Map.of());
  }

  public static String buildEndpoint(
      Endpoint endpoint, Map<String, ?> pathParams, Map<String, ?> queryParams) {
    String result = endpoint.path();

    for (Map.Entry<String, ?> entry : pathParams.entrySet()) {
      result = result.replace("{" + entry.getKey() + "}", String.valueOf(entry.getValue()));
    }

    if (!queryParams.isEmpty()) {
      List<String> pairs = new ArrayList<>();
      for (Map.Entry<String, ?> entry : queryParams.entrySet()) {
        // Collections become repeated parameters with the same key.
        if (entry.getValue() instanceof Collection<?> values) {
          values.forEach(item -> pairs.add(encode(entry.getKey()) + "=" + encode(String.valueOf(item))));
        } else {
          pairs.add(encode(entry.getKey()) + "=" + encode(String.valueOf(entry.getValue())));
        }
      }
      result = result + "?" + String.join("&", pairs);
    }

    return result;
  }

  /**
   * Saves a downloaded file to {@code temp/} in the working directory when {@code
   * SAVE_TEST_OUTPUT=true}.
   */
  public static void saveFileIfEnabled(String fileName, byte[] data) {
    if (!"true".equalsIgnoreCase(Config.env("SAVE_TEST_OUTPUT", "false"))) {
      return;
    }
    try {
      Path dir = Path.of("temp");
      Files.createDirectories(dir);
      Path file = dir.resolve(fileName);
      Files.write(file, data);
      System.out.println("Test file saved at: " + file.toAbsolutePath());
    } catch (IOException e) {
      throw new IllegalStateException("Could not save " + fileName, e);
    }
  }

  /** Current date as YYYY-MM-DD. */
  public static String formattedCurrentDate() {
    return LocalDate.now().toString();
  }

  public static String formattedNextDate() {
    return LocalDate.now().plusDays(1).toString();
  }

  private static String encode(String value) {
    return URLEncoder.encode(value, StandardCharsets.UTF_8).replace("+", "%20");
  }
}
