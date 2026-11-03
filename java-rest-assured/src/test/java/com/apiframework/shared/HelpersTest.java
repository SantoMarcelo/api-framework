package com.apiframework.shared;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.apiframework.shared.Endpoints.ExampleEndpoints;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

@Tag("unit")
class HelpersTest {

  @Test
  void buildEndpointReplacesPathParams() {
    assertEquals(
        "/items/42", Helpers.buildEndpoint(ExampleEndpoints.UPDATE_ITEM, Map.of("id", 42)));
  }

  @Test
  void buildEndpointRepeatsKeyForCollectionsAndEncodesValues() {
    String result =
        Helpers.buildEndpoint(
            ExampleEndpoints.CREATE_ITEM, Map.of(), Map.of("ids", List.of(1, 2), "q", "a b"));

    // Map.of has no defined order, so check the pieces
    assertEquals(true, result.startsWith("/items?"));
    assertEquals(true, result.contains("ids=1&ids=2"));
    assertEquals(true, result.contains("q=a%20b"));
  }
}
