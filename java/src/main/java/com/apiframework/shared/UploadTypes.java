package com.apiframework.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/** Shared response shape of the import/upload endpoints. */
public final class UploadTypes {
  private UploadTypes() {}

  public record UploadErrorType(int statusCode, String title, Object detail, String code) {}

  public record UploadResponse(
      @JsonProperty("total_rows") Integer totalRows,
      @JsonProperty("handled_rows") Integer handledRows,
      @JsonProperty("skipped_rows_errors") List<Object> skippedRowsErrors,
      List<UploadErrorType> errors) {

    /** {@code errors} is optional in the contract; absent means no errors. */
    public List<UploadErrorType> errorsOrEmpty() {
      return errors == null ? List.of() : errors;
    }
  }
}
