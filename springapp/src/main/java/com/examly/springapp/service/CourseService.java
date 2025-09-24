package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Course;

public interface CourseService { 
    Course addCourse(Course course);
    List<Course>getAllCourses();
    Course editCourse(Long courseId,Course updatedCourse);
    Course deleteCourse(Long courseId);
    Course getCourseById(Long coursed);
}
