package com.apiframework.shared;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;

/** Single Jackson mapper for the whole framework. Request/response models are records. */
public final class Json {
  private static final ObjectMapper MAPPER =
      new ObjectMapper()
          .setSerializationInclusion(JsonInclude.Include.NON_NULL)
          .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

  private Json() {}

  public static ObjectMapper mapper() {
    return MAPPER;
  }

  public static String toJson(Object value) {
    try {
      return MAPPER.writeValueAsString(value);
    } catch (JsonProcessingException e) {
      throw new IllegalArgumentException("Could not serialize " + value.getClass().getSimpleName(), e);
    }
  }

  public static <T> T parse(String json, Class<T> type) {
    try {
      return MAPPER.readValue(json, type);
    } catch (JsonProcessingException e) {
      throw new IllegalArgumentException("Could not parse response as " + type.getSimpleName(), e);
    }
  }

  public static <T> List<T> parseList(String json, Class<T> elementType) {
    try {
      return MAPPER.readValue(
          json, MAPPER.getTypeFactory().constructCollectionType(List.class, elementType));
    } catch (JsonProcessingException e) {
      throw new IllegalArgumentException(
          "Could not parse response as List<" + elementType.getSimpleName() + ">", e);
    }
  }

  public static JsonNode readTree(String json) {
    try {
      return MAPPER.readTree(json);
    } catch (JsonProcessingException e) {
      throw new IllegalArgumentException("Response is not valid JSON", e);
    }
  }
}
