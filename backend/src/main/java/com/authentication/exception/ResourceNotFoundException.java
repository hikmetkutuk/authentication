package com.authentication.exception;

public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException() {
        super("Resource not found on db!!");
    }

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
