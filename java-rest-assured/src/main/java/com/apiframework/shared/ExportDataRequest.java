package com.apiframework.shared;

/** Input of every export/download API method: the request body and the name used when saving. */
public record ExportDataRequest(Object body, String filename) {}
