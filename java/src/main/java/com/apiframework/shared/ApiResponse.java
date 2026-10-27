package com.apiframework.shared;

/** Status + parsed body of a REST call. Domain methods suffixed {@code ByApi} return this. */
public record ApiResponse<T>(int status, T data) {}
