package com.fullstack.demo.exception;

// Extension task for faster students
public class DuplicateStudentException extends RuntimeException {
    public DuplicateStudentException(String studentId) {
        super("Duplicate student found with ID: " + studentId);
    }    
}
