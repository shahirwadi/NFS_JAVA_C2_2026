package com.fullstack.demo;

import java.util.ArrayList;
import com.fullstack.demo.model.Course;
import com.fullstack.demo.model.CourseOffering;
import com.fullstack.demo.model.Instructor;
import com.fullstack.demo.model.Student;

public class Main {
    public static void main(String[] args) {

        ArrayList<Course> courses = new ArrayList<>();
        //Add at least three courses.
        courses.add(new Course("C001", "Java Fundamentals", 14, "Beginner","Programming",true));
        courses.add(new Course("C002", "React Frontend Development", 21, "Intermediate","Programming",true));
        courses.add(new Course("C003", "MongoDB Basics", 14, "Beginner","Programming",true));
        
        ArrayList<Instructor> instructors = new ArrayList<>();
        //Add at least two instructors.
         instructors.add(new Instructor("I001", "Alice Johnson", "Java Development"));
        instructors.add(new Instructor("I002", "Bob Smith", "React Development"));

        ArrayList<Student> students = new ArrayList<>();
        //Add at least three students.
        students.add(new Student("S001", "Charlie Brown", "charlie@example.com"));
        students.add(new Student("S002", "Daisy Duck", "daisy@example.com"));
        students.add(new Student("S003", "Eve Wilson", "eve@example.com"));
        
        ArrayList<CourseOffering> offerings = new ArrayList<>();
        //Add at least two course offerings.
        offerings.add(new CourseOffering("OFF001", "Java Fundamentals - June 2026 Intake", courses.get(0), instructors.get(1), "2026-06-19", "2026-06-20", 25, "Physical"));
        offerings.add(new CourseOffering("OFF002", "React Framework - June 2026 Intake", courses.get(1), instructors.get(0), "2026-07-19", "2026-07-20", 21, "Hybrid"));

        for (Course course : courses) {
            course.printSummary();
        }
        for (CourseOffering offering : offerings) {
            offering.printSummary();
        }
        for (Student student : students) {
            student.printProfile();
        }
        for (Instructor instructor : instructors) {
            instructor.printProfile();
        }

    }
}