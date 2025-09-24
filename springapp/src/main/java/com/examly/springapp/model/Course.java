package com.examly.springapp.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseid;
    private String title;
    private String description;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate courseStartDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate courseEndDate;
    private String category;
    private String level;
    public Course() {
    }
    public Long getCourseid() {
        return courseid;
    }
    public void setCourseid(Long courseid) {
        this.courseid = courseid;
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
    public LocalDate getCourseStartDate() {
        return courseStartDate;
    }
    public void setCourseStartDate(LocalDate courseStartDate) {
        this.courseStartDate = courseStartDate;
    }
    public LocalDate getCourseEndDate() {
        return courseEndDate;
    }
    public void setCourseEndDate(LocalDate courseEndDate) {
        this.courseEndDate = courseEndDate;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getLevel() {
        return level;
    }
    public void setLevel(String level) {
        this.level = level;
    }
}