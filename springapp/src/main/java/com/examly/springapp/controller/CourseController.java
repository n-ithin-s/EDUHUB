package com.examly.springapp.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Course;
import com.examly.springapp.service.CourseService;
import com.examly.springapp.utils.Util;

@RestController
@CrossOrigin(origins = Util.FRONTEND,allowedHeaders="*")
public class CourseController {
    
    @Autowired
    CourseService courseService;

    @PostMapping("/api/course")
    @PreAuthorize("hasAuthority('EDUCATOR')")
    public ResponseEntity<Course> addCourse(@RequestBody Course course){
        Course courseAdd = courseService.addCourse(course);
        if(courseAdd!=null){
            return ResponseEntity.status(HttpStatus.CREATED).body(courseAdd);
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    @GetMapping("/api/course")
    @PreAuthorize("permitAll()")
    public ResponseEntity<List<Course>> getAllCourses(){
        List<Course> list = courseService.getAllCourses();
        if(list!=null){
            return ResponseEntity.status(HttpStatus.OK).body(list);
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    
    @PutMapping("/api/course/{courseId}") 
    @PreAuthorize("hasAuthority('EDUCATOR')")
    public ResponseEntity<Course> editCourse(@PathVariable Long courseId,@RequestBody Course updatedCourse){
        Course updateCourse = courseService.editCourse(courseId, updatedCourse);
        if(updateCourse!=null){
            return ResponseEntity.status(HttpStatus.OK).body(updateCourse);
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    @DeleteMapping("/api/course/{courseId}")
    @PreAuthorize("hasAuthority('EDUCATOR')")
    public ResponseEntity<Course> deleteCourse(@PathVariable Long courseId){
        Course deleteCourse = courseService.deleteCourse(courseId);
        if(deleteCourse!=null){
            return ResponseEntity.status(HttpStatus.OK).body(null);
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    @GetMapping("/api/course/{courseId}")
    @PreAuthorize("permitAll()")
    public ResponseEntity<Course> getCourseById(@PathVariable Long courseId){
        Course getById = courseService.getCourseById(courseId);
        if(getById!=null){
            return ResponseEntity.status(HttpStatus.OK).body(getById);
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
