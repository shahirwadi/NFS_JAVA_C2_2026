package com.fullstack.demo;

import com.fullstack.demo.model.Course;
import com.fullstack.demo.repository.CourseRepository;
import com.fullstack.demo.repository.InMemoryCourseRepository;
import com.fullstack.demo.service.CourseService;

import java.util.List;
// Task C - Test your method in a demo class
public class SearchPractice {
    public static void main(String[] args) {

        CourseRepository courseRepository = new InMemoryCourseRepository();
        CourseService courseService = new CourseService(courseRepository);

        courseRepository.save(new Course("C001", "Java Fundamentals", 20, "Beginner"));
        courseRepository.save(new Course("C002", "React Frontend Development", 30, "Intermediate"));
        courseRepository.save(new Course("C003", "MongoDB Basics", 15, "Beginner"));
        courseRepository.save(new Course("C004", "Spring Boot API Development", 25, "Intermediate"));

        List<Course> beginnerCourses = courseService.searchByLevelUsingLoop("Beginner");

        System.out.println("=== Beginner Courses ===");
        for (Course course : beginnerCourses) {
            System.out.println(course.getCourseId() + " - " + course.getTitle());
        }
        
    }
}