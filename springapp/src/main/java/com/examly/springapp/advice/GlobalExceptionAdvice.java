package com.examly.springapp.advice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.examly.springapp.exception.CourseAlreadyExistsException;
import com.examly.springapp.exception.UserExistException;

@RestControllerAdvice
public class GlobalExceptionAdvice {

    @ExceptionHandler
    public ResponseEntity<?> userExistHandler(UserExistException userExistException){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(false);
    }

    @ExceptionHandler(AuthenticationException.class )
    public ResponseEntity<String> handleAuthenticationException(AuthenticationException ex) {
           String errmsg="Invalid Credential!! Authentication Failed";
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errmsg);
    }
    
    @ExceptionHandler(CourseAlreadyExistsException.class)
    public ResponseEntity<String> handleCourseException(CourseAlreadyExistsException e){
        String errmsg = "Course already exist !";
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(errmsg);
    }
}
