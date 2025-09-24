package com.examly.springapp.controller;

import java.util.List;

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

import com.examly.springapp.model.Enrollment;
import com.examly.springapp.service.EnrollmentService;
import com.examly.springapp.utils.Util;

@RestController
@CrossOrigin(origins = Util.FRONTEND,allowedHeaders="*")
public class EnrollmentController {

    @Autowired
    EnrollmentService enrollmentService;

    @PostMapping("/api/enrollment")
    @PreAuthorize("hasAuthority('STUDENT')")
    public ResponseEntity<Enrollment> addEnrollment(@RequestBody Enrollment enrollment){
        Enrollment currentEnrollment = enrollmentService.addEnrollment(enrollment);
        if(currentEnrollment!=null){
            return ResponseEntity.status(HttpStatus.CREATED).body(currentEnrollment);
        }
        else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/api/enrollment/user/{userId}")
    @PreAuthorize("permitAll()")
    public ResponseEntity<List<Enrollment>> getAllEnrollmentsByUserId(@PathVariable long userId){
       List<Enrollment> currentEnrollment = enrollmentService.getAllEnrollmentsByUserId(userId);
        if(currentEnrollment!=null){
            return ResponseEntity.status(HttpStatus.OK).body(currentEnrollment);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        
    }

    @GetMapping("/api/enrollment/course/{courseId}")
    @PreAuthorize("permitAll()")
    public ResponseEntity<List<Enrollment>> getAllEnrollmentsByCourseId(@PathVariable long courseId){
       List<Enrollment> currentEnrollment = enrollmentService.getAllEnrollmentsByCourseId(courseId);
        if(currentEnrollment!=null){
            return ResponseEntity.status(HttpStatus.OK).body(currentEnrollment);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        
    }

    @PutMapping("/api/enrollment/{enrollmentId}")
    @PreAuthorize("permitAll()")
    public ResponseEntity<Enrollment> editEnrollment(@RequestBody Enrollment enrollment,@PathVariable long enrollmentId){
        Enrollment currentEnrollment = enrollmentService.editEnrollment(enrollment, enrollmentId);
        if(currentEnrollment!=null){
            return ResponseEntity.status(HttpStatus.OK).body(currentEnrollment);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

    }

    @DeleteMapping("/api/enrollment/{enrollmentId}")
    @PreAuthorize("hasAuthority('STUDENT')")
    public ResponseEntity<Enrollment>deleteEnrollment(@PathVariable long enrollmentId){
        Enrollment currentEnrollment = enrollmentService.deleteEnrollment(enrollmentId);
        if(currentEnrollment!=null){
            return ResponseEntity.status(HttpStatus.OK).body(currentEnrollment);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        }

    
    @GetMapping("/api/enrollment")
    @PreAuthorize("permitAll()")
    public ResponseEntity<List<Enrollment>> getAllEnrollments(){
        List<Enrollment> currentEnrollment = enrollmentService.getAllEnrollments();
        if(currentEnrollment!=null){
            return ResponseEntity.status(HttpStatus.OK).body(currentEnrollment);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

    }

    @PutMapping("/api/enrollment/user/{userId}/course/{courseId}")
    @PreAuthorize("permitAll()")
    public ResponseEntity<?> updateEnrollment(@PathVariable long userId,@PathVariable long courseId,@RequestBody Enrollment enrollment){
        Enrollment updatedEnrollment=enrollmentService.updateEnrollment(userId,courseId,enrollment);
        if(updatedEnrollment!=null){
            return ResponseEntity.status(HttpStatus.OK).body(updatedEnrollment);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    }



   
    

