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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Feedback;
import com.examly.springapp.model.User;
import com.examly.springapp.service.FeedbackService;
import com.examly.springapp.service.UserService;
import com.examly.springapp.utils.Util;

@RestController
@CrossOrigin(origins = Util.FRONTEND,allowedHeaders="*")
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    FeedbackService feedbackService;

    @Autowired
    UserService userService; 
 
    @PostMapping
    @PreAuthorize("hasAuthority('STUDENT')")
    ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback){
        Feedback newFeedback = feedbackService.addFeedback(feedback);
        if(newFeedback!=null){
            return ResponseEntity.status(HttpStatus.CREATED).body(newFeedback);
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/user/{userId}") 
    @PreAuthorize("permitAll()")
    ResponseEntity<List<Feedback>> getAllFeedbackByUserId(@PathVariable Long userId){
        List<Feedback> AllFeedBackOfUser = feedbackService.getAllFeedbackByUserId(userId);
        if(AllFeedBackOfUser.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }else{
            return ResponseEntity.status(HttpStatus.OK).body(AllFeedBackOfUser);
        }
    }

    // @CrossOrigin(origins ="*",allowedHeaders="*") 
    @DeleteMapping("/{feedbackId}")
    @PreAuthorize("hasAuthority('STUDENT')")
    ResponseEntity<Feedback> deleteFeedbackByUserId(@PathVariable Long feedbackId){
        Feedback feedBackToBeDelete = feedbackService.deleteFeedback(feedbackId);
        if(feedBackToBeDelete!=null){
            return ResponseEntity.status(HttpStatus.OK).body(feedBackToBeDelete);
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    // @CrossOrigin(origins ="*",allowedHeaders="*") 
    @GetMapping
    @PreAuthorize("permitAll()")
    ResponseEntity<List<Feedback>> getAllFeedback(){
        List<Feedback> feedbacks = feedbackService.getAllFeedback();
        if(feedbacks!=null){
            return ResponseEntity.status(HttpStatus.OK).body(feedbacks); 
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    
    @PutMapping("/{feedbackId}")
    @PreAuthorize("hasAuthority('STUDENT')")
    ResponseEntity<Feedback> editFeedback(@PathVariable Long feedbackId, @RequestBody Feedback feedbackToBeUpdate){
        Feedback feedback = feedbackService.editFeedback(feedbackId, feedbackToBeUpdate);
        if(feedback!=null){
            return ResponseEntity.status(HttpStatus.OK).body(feedback); 
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }


    @GetMapping("/{userId}")
    @PreAuthorize("permitAll()")
    ResponseEntity<User> getUserByUserId(@PathVariable Long userId){ 
        User user = feedbackService.getUserByUserId(userId);
        if(user!=null){
            return ResponseEntity.status(HttpStatus.OK).body(user); 
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/user/{userId}")
    @PreAuthorize("permitAll()")
    ResponseEntity<Feedback> updateWithUser(@PathVariable Long userId,@RequestBody Feedback feedback){
        Feedback updatedFeedback = feedbackService.updateWithUser(userId,feedback);
        if(updatedFeedback!=null){
            return ResponseEntity.status(HttpStatus.OK).body(updatedFeedback); 
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    
}
