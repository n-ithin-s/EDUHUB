package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Course;
import com.examly.springapp.model.Material;
import com.examly.springapp.repository.CourseRepo;
import com.examly.springapp.repository.MaterialRepo;

@Service("materialService")
public class MaterialServiceImpl implements MaterialService {

    @Autowired
    MaterialRepo materialRepo;

    @Autowired
    CourseRepo courseRepo;
    

    public Material addMaterial(Material material){

        return materialRepo.save(material);

    }

     public List<Material> getAllMaterials(){
        return materialRepo.findAll();

    }

    public List<Material> getAllMaterialsByCourseId(long courseId){
        return materialRepo.findByCourseCourseid(courseId);

    }
    
    public Material deleteMaterial(long materialId){
        Optional<Material> ops = materialRepo.findById(materialId);
        if(ops.isPresent()){
            materialRepo.deleteById(materialId);
            return ops.get();      
        }
        else{
            return null;
        }
    }

    @Override
    public Material updateMaterialWithCourse(long courseId,Material material) {
      Course existCourse=courseRepo.findById(courseId).get();
      if(existCourse==null){
        return null;
      }
      else{
        material.setCourse(existCourse);
        return materialRepo.save(material);
      }
    }

    
}