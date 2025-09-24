package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Course;

@Repository
public interface CourseRepo extends JpaRepository<Course,Long>{
    @Query("select c from Course c where c.title = ?1")
    public Course getByCourseTitle(String title);

}