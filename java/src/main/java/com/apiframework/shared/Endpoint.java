package com.apiframework.shared;

/** A path relative to {@code Config.baseApiUrl()}. Implemented by one enum per domain. */
public interface Endpoint {
  String path();
}
