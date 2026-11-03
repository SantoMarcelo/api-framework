package com.apiframework.shared;

import java.util.List;

public record ValidationResult(boolean success, List<String> errors) {}
