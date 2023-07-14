package com.authentication.exception;

public class ResourceAlreadyExistException extends RuntimeException {
    public ResourceAlreadyExistException() {
        super("Resource already exist in db!!");
    }

    public ResourceAlreadyExistException(String message) {
        super(message);
    }
}
