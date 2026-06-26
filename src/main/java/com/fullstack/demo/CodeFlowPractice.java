package com.fullstack.demo;

import com.fullstack.demo.model.Course;
import com.fullstack.demo.repository.CourseRepository;
import com.fullstack.demo.repository.InMemoryCourseRepository;
import com.fullstack.demo.service.CourseService;

public class CodeFlowPractice {
    public static void main(String[] args) {
        //-----------------------------------------------------------------------------
        //Task A - Create the repository and service 
        // The repository is created first because it is a dependency of CourseService.
        // CourseService cannot function without a data source to retrieve and store courses
        CourseRepository courseRepository = new InMemoryCourseRepository();

        // CourseService needs CourseRepository to perform its business logic operations
        CourseService courseService = new CourseService(courseRepository);

        //-----------------------------------------------------------------------------
        //Task B - Create one new course 
        Course course4 = new Course("C004", "Spring Boot API Development", 18, "Intermediate");
        courseService.createCourse(course4);

        //-----------------------------------------------------------------------------
        //Task C - Retrieve the course by ID
        Course retrievedCourse = courseService.getCourseById("C004");
        retrievedCourse.printSummary();

     }
}

//-----------------------------------------------------------------------------
//Task D - Add trace comments
// 1. This CodeFlowPractice calls CourseService.
// 2. CourseService validates the course.
// 3. CourseService asks CourseRepository to save or find the course.
// 4. InMemoryCourseRepository stores or finds the course in a LinkedHashMap.
// 5. The Course object is returned back up to this demo class.