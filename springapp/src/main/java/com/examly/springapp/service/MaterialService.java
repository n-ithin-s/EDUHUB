package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Material;

public interface MaterialService {

    public Material addMaterial(Material material);
    public List<Material> getAllMaterials();
    public List<Material> getAllMaterialsByCourseId(long courseId);
    public Material deleteMaterial(long materialId);
    public Material updateMaterialWithCourse(long courseId, Material material);
    
}