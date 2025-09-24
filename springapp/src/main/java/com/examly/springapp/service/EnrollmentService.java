package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Enrollment;

public interface EnrollmentService {
    Enrollment addEnrollment(Enrollment enrollment);
    Enrollment editEnrollment(Enrollment enrolment, Long enrollmentId);
    List<Enrollment> getAllEnrollments();
    List<Enrollment> getAllEnrollmentsByCourseId(Long courseId);
    List<Enrollment> getAllEnrollmentsByUserId(Long userId);
    Enrollment deleteEnrollment(Long enrollmentID);
    Enrollment updateEnrollment(long userId, long courseId, Enrollment enrollment);

    
}