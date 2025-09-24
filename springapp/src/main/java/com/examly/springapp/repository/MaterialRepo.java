package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Material;

@Repository

public interface MaterialRepo extends JpaRepository<Material,Long> {
     public List<Material> findByCourseCourseid(long courseId);
}
