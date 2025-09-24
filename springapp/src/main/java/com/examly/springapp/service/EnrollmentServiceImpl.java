package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Course;
import com.examly.springapp.model.Enrollment;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.CourseRepo;
import com.examly.springapp.repository.EnrollmentRepo;
import com.examly.springapp.repository.UserRepo;
@Service("enrollmentService")
public class EnrollmentServiceImpl implements EnrollmentService{
    @Autowired
    EnrollmentRepo enrollmentRepo;

    @Autowired
    CourseRepo courseRepo;

    @Autowired
    UserRepo userRepo;

    @Override
    public Enrollment addEnrollment(Enrollment enrollment) {
        return enrollmentRepo.save(enrollment);
    }

    @Override
    public Enrollment editEnrollment(Enrollment enrolment, Long enrollmentId) {
      Enrollment existEnrollment=enrollmentRepo.findById(enrollmentId).get();
      if(existEnrollment!=null){
        existEnrollment.setEnrollmentDate(enrolment.getEnrollmentDate());
        existEnrollment.setStatus(enrolment.getStatus());
        return enrollmentRepo.save(existEnrollment);
      }
      else{
        return null;
      }
    }

    @Override
    public List<Enrollment> getAllEnrollments() {
      return enrollmentRepo.findAll();
    }

    @Override
    public List<Enrollment> getAllEnrollmentsByCourseId(Long courseId) {
      return enrollmentRepo.getAllEnrollmentsByCourseId(courseId);
    }

    @Override
    public List<Enrollment> getAllEnrollmentsByUserId(Long userId) {
       return enrollmentRepo.getAllEnrollmentsByUserId(userId);
    }

    @Override
    public Enrollment deleteEnrollment(Long enrollmentID) {
      Enrollment existEnrollment=enrollmentRepo.findById(enrollmentID).get();
      if(existEnrollment!=null){
        enrollmentRepo.deleteById(enrollmentID);
        return existEnrollment;
      }
      else{
        return null;
      }
    }

    @Override
    public Enrollment updateEnrollment(long userId, long courseId, Enrollment enrollment) {
      User existUser=userRepo.findById(userId).get();
      Course existCourse=courseRepo.findById(courseId).get();
      if(existUser==null || existCourse==null){
        return null;
      }
      else{
        enrollment.setUser(existUser);
        enrollment.setCourse(existCourse);
        return enrollmentRepo.save(enrollment);
      }
    }

    
}
