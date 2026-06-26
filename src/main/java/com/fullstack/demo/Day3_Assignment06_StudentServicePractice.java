package com.fullstack.demo;

import com.fullstack.demo.exception.StudentNotFoundException;
import com.fullstack.demo.model.Student;
import com.fullstack.demo.repository.InMemoryStudentRepository;
import com.fullstack.demo.repository.StudentRepository;
import com.fullstack.demo.service.StudentService;

import java.util.List;
// Part 5 - Create a demo class
public class Day3_Assignment06_StudentServicePractice {
    public static void main(String[] args) {

        StudentRepository studentRepository = new InMemoryStudentRepository();
        StudentService studentService = new StudentService(studentRepository);

        // Register at least 3 students.
        System.out.println("=== Register Students ===");
        studentService.registerStudent(new Student("S001", "Roberto Chan", "roberto@example.com"));
        studentService.registerStudent(new Student("S002", "Priya Nair", "priya@example.com"));
        studentService.registerStudent(new Student("S003", "Lee Salazar", "lee@example.com"));

        // Print all students
        System.out.println("\n=== All Students ===");
        for (Student student : studentService.getAllStudents()) {
            System.out.println(student.getStudentId() + " - " + student.getStudentName() + " - " + student.getEmail());
        }

        // Find one student by ID.
        System.out.println("\n=== Find Student By ID ===");
        Student found = studentService.getStudentById("S002");
        System.out.println("Found: " + found.getStudentId() + " - " + found.getStudentName());

        // Search students by name.
        System.out.println("\n=== Search Student By Name ===");
        List<Student> results = studentService.searchByNameUsingLoop("a");
        for (Student student : results) {
            System.out.println(student.getStudentId() + " - " + student.getStudentName());
        }

        // Try to find a missing student ID
        System.out.println("\n=== Missing Student Test ===");
        try {
            studentService.getStudentById("S999");
        } catch (StudentNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }
}