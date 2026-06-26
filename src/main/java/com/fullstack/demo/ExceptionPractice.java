package com.fullstack.demo;

import com.fullstack.demo.exception.CourseNotFoundException;
import com.fullstack.demo.model.Course;
import com.fullstack.demo.repository.CourseRepository;
import com.fullstack.demo.repository.InMemoryCourseRepository;
import com.fullstack.demo.service.CourseService;

public class ExceptionPractice {

    public static void main(String[] args) {

        // Task A - Set up CourseService
        CourseRepository courseRepository = new InMemoryCourseRepository();
        CourseService courseService = new CourseService(courseRepository);

        // Task B - Add two courses
        courseService.createCourse(new Course("C001", "Java Fundamentals", 10, "Beginner"));
        courseService.createCourse(new Course("C002", "React Frontend Development", 12, "Beginner"));

        // Task C - Find an existing course
        System.out.println("=== Looking up existing course C001 ===");
        Course course = courseService.getCourseById("C001");
        course.printSummary();

        // Task D - Find a missing course C999 and catch the exception
        System.out.println("\n=== Looking up missing course C999 ===");
        try {
            Course missingCourse = courseService.getCourseById("C999");
            missingCourse.printSummary();
        } catch (CourseNotFoundException e) {
            System.out.println("Friendly message for user: " + e.getMessage());
        }

        // Task E - Find another missing course C888 and catch the exception
        System.out.println("\n=== Looking up missing course C888 ===");
        try {
            Course missingCourse = courseService.getCourseById("C888");
            missingCourse.printSummary();
        } catch (CourseNotFoundException e) {
            System.out.println("Cannot display course details because the course does not exist.");
        }
    }
}