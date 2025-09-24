package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.CourseAlreadyExistsException;
import com.examly.springapp.model.Course;
import com.examly.springapp.repository.CourseRepo;

@Service("courseService")
public class CourseServiceImpl implements CourseService{

    @Autowired
    CourseRepo courseRepo;

    @Override
    public Course addCourse(Course course) {
        Course existCourse=courseRepo.getByCourseTitle(course.getTitle());
        if(existCourse==null){
            
            return courseRepo.save(course);
        }
        else{
            throw new CourseAlreadyExistsException("Course already exists.");
        }
    }

    @Override
    public List<Course> getAllCourses() {
        return courseRepo.findAll();

    }

    @Override
    public Course editCourse(Long courseId, Course updatedCourse) {
        Optional<Course> ops = courseRepo.findById(courseId);
        if(ops.isPresent()){
            Course course = ops.get();
            course.setTitle(updatedCourse.getTitle());
            course.setDescription(updatedCourse.getDescription());
            course.setCourseEndDate(updatedCourse.getCourseEndDate());
            course.setCourseStartDate(updatedCourse.getCourseStartDate());
            course.setCategory(updatedCourse.getCategory());
            course.setLevel(updatedCourse.getLevel());
            return courseRepo.save(course);
        }
        return null;
    }

    @Override
    public Course deleteCourse(Long courseId) {
        Optional<Course> ops = courseRepo.findById(courseId);
        if(ops.isPresent()){
            courseRepo.deleteById(courseId);
            return ops.get();
        }
        else{
            return null;
        }
    }

    @Override
    public Course getCourseById(Long coursed) {
        Optional<Course> ops = courseRepo.findById(coursed);
        return ops.get();
    }
    
}