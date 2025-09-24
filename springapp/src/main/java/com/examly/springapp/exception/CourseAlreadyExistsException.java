package com.examly.springapp.exception;

public class CourseAlreadyExistsException extends RuntimeException{
        public CourseAlreadyExistsException(String msg){
            super(msg);
        }
}
