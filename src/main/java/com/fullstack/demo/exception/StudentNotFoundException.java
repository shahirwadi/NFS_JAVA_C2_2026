package com.fullstack.demo.exception;

// Part 3 - Create StudentNotFoundException
public class StudentNotFoundException extends RuntimeException {
    public StudentNotFoundException(String studentId) {
        super("Student not found with ID: " + studentId);
    
}
}