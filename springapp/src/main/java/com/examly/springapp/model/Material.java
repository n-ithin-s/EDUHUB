package com.examly.springapp.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Material {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private long materialId;
   private String title;
   private String description; 
//    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd")
   private String url;
   private String youTube;
   private String contentType;
//    @ManyToOne(cascade = CascadeType.ALL)
@ManyToOne
   @JoinColumn(name="course_id")
   private Course course;
   @JsonFormat(pattern = "yyyy-MM-dd")
   private LocalDate uploadDate;

   Material(){

   }

    public long getMaterialId() {
        return materialId;
    }
    public void setMaterialId(long materialId) {
        this.materialId = materialId;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
    public void setYouTube(String youTube) {
        this.youTube = youTube;
    }
    public String getYouTube() {
       
        return youTube;
 
    }
    public String getContentType() {
        return contentType;
    }
    public void setContentType(String contentType) {
        this.contentType = contentType;
    }
    public Course getCourse() {
        return course;
    }
    public void setCourse(Course course) {
        this.course = course;
    }
    public LocalDate getUploadDate() {
        return uploadDate;
    }
    public void setUploadDate(LocalDate uploadDate) {
        this.uploadDate = uploadDate;
    }
    


    }