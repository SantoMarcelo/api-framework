package com.apiframework.shared;

import com.networknt.schema.JsonSchema;
import com.networknt.schema.JsonSchemaFactory;
import com.networknt.schema.SpecVersion;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Contract validation against JSON Schema files in {@code src/main/resources/schemas/<domain>/}.
 * Validate the raw response body, not the parsed record, so unknown or missing fields are caught.
 */
public final class SchemaValidator {
  private static final JsonSchemaFactory FACTORY =
      JsonSchemaFactory.getInstance(SpecVersion.VersionFlag.V7);
  private static final Map<String, JsonSchema> CACHE = new ConcurrentHashMap<>();

  private SchemaValidator() {}

  /**
   * @param schemaResource classpath location, e.g. {@code /schemas/example/search-items-response.json}
   * @param json the raw response body
   */
  public static ValidationResult validate(String schemaResource, String json) {
    List<String> errors =
        load(schemaResource).validate(Json.readTree(json)).stream()
            .map(message -> message.getMessage())
            .sorted()
            .toList();
    return new ValidationResult(errors.isEmpty(), errors);
  }

  private static JsonSchema load(String schemaResource) {
    return CACHE.computeIfAbsent(
        schemaResource,
        resource -> {
          try (InputStream in = SchemaValidator.class.getResourceAsStream(resource)) {
            if (in == null) {
              throw new IllegalArgumentException("Schema not found on classpath: " + resource);
            }
            return FACTORY.getSchema(in);
          } catch (IOException e) {
            throw new IllegalStateException("Could not read schema " + resource, e);
          }
        });
  }
}
