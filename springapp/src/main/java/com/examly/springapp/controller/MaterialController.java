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

import com.examly.springapp.model.Material;
import com.examly.springapp.service.MaterialService;
import com.examly.springapp.utils.Util;

@RestController
@CrossOrigin(origins = Util.FRONTEND,allowedHeaders="*")
public class MaterialController {
    
    @Autowired

    MaterialService materialService;

    @PostMapping("/api/material")
    // @CrossOrigin(origins ="*",allowedHeaders="*")
    @PreAuthorize("hasAuthority('EDUCATOR')")
    public ResponseEntity<Material> addMaterial(@RequestBody Material material){

        Material addedMaterial = materialService.addMaterial(material);
        if(addedMaterial!=null){

            return ResponseEntity.status(HttpStatus.CREATED).body(addedMaterial);
        }
        else{
            
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }

    @GetMapping("/api/material")
    // @CrossOrigin(origins ="*",allowedHeaders="*")
    @PreAuthorize("permitAll()")
    public ResponseEntity<List<Material>> getAllMaterials(){
        List<Material> gettingAllMaterials = materialService.getAllMaterials();

        if(gettingAllMaterials!=null){

            return ResponseEntity.status(HttpStatus.OK).body(gettingAllMaterials);
        }
        else{
            
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }

    @GetMapping("/api/material/course/{courseId}")
    // @CrossOrigin(origins ="*",allowedHeaders="*")
    @PreAuthorize("permitAll()")
    public ResponseEntity<List<Material>> getAllMaterialsByCourseId(@PathVariable long courseId){
        List<Material> getMaterialsByCourseId = materialService.getAllMaterialsByCourseId(courseId);

        if(getMaterialsByCourseId!=null){

            return ResponseEntity.status(HttpStatus.OK).body(getMaterialsByCourseId);
        }
        else{
            
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @DeleteMapping("/api/material/{materialId}")
    // @CrossOrigin(origins ="*",allowedHeaders="*")
    @PreAuthorize("hasAuthority('EDUCATOR')")
    public ResponseEntity<Material> deleteMaterial(@PathVariable long materialId){
        Material deletedMaterial = materialService.deleteMaterial(materialId);

        if(deletedMaterial!=null){
            return ResponseEntity.status(HttpStatus.OK).body(deletedMaterial);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PutMapping("/api/material/course/{courseId}")
    @PreAuthorize("permitAll()")
    public ResponseEntity<Material> updateMaterialWithCourse(@PathVariable long courseId,@RequestBody Material material){
        Material updatedMaterial=materialService.updateMaterialWithCourse(courseId,material);
        if(updatedMaterial!=null){
            return ResponseEntity.status(HttpStatus.OK).body(updatedMaterial);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
