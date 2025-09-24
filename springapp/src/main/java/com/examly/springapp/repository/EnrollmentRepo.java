package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Enrollment;

@Repository
public interface EnrollmentRepo extends JpaRepository<Enrollment,Long>{
    @Query(value = "select e from Enrollment e where e.course.courseid = ?1")
    List<Enrollment> getAllEnrollmentsByCourseId(Long courseId);

    @Query(value = "select e from Enrollment e where e.user.userId = ?1")
    List<Enrollment> getAllEnrollmentsByUserId(Long userId);
    
}
