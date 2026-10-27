package com.apiframework.domain.example.factories;

import java.util.List;
import java.util.Map;

/** Payload factory for download/export tests. Always named {@code ExportPayloadFactory}. */
public final class ExportPayloadFactory {
  private ExportPayloadFactory() {}

  public static Map<String, Object> createExportItemsWithSuccess(List<Long> ids) {
    return Map.of("ids", ids, "limit", 1000, "offset", 0);
  }
}
