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
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long enrollmentId;
    // @ManyToOne(cascade = CascadeType.ALL)
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    // @ManyToOne(cascade = CascadeType.ALL)
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate enrollmentDate;
    private String status;
    public Enrollment() {
    }
    public long getEnrollmentId() {
        return enrollmentId;
    }
    public void setEnrollmentId(long enrollmentId) {
        this.enrollmentId = enrollmentId;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Course getCourse() {
        return course;
    }
    public void setCourse(Course course) {
        this.course = course;
    }
    public LocalDate getEnrollmentDate() {
        return enrollmentDate;
    }
    public void setEnrollmentDate(LocalDate enrollmentDate) {
        this.enrollmentDate = enrollmentDate;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }


}
