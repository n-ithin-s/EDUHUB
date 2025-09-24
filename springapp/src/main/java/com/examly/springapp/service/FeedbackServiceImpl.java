package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Feedback;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.FeedbackRepo;
import com.examly.springapp.repository.UserRepo;

@Service("feedbackService")
public class FeedbackServiceImpl implements FeedbackService{

    @Autowired
    FeedbackRepo feedbackRepo;

    @Autowired
    UserRepo userRepo;


    @Override
    public Feedback addFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback); 
    }

    @Override
    public List<Feedback> getAllFeedback() {
        return feedbackRepo.findAll(); 
    }
    

    @Override
    public List<Feedback> getAllFeedbackByUserId(Long userId) {
        return feedbackRepo.getAllFeedbackByUserId(userId);
     
    }

    @Override
    public Feedback editFeedback(Long feedbackId, Feedback updatedFeedback) {
        Optional<Feedback> ops = feedbackRepo.findById(feedbackId);
        if(ops.isPresent()){
          Feedback existingFeedback = ops.get();
          existingFeedback.setDate(updatedFeedback.getDate());
          existingFeedback.setFeedbackText(updatedFeedback.getFeedbackText());
          return feedbackRepo.save(existingFeedback);
        }else{
            return null;
        }
       
    }

    @Override
    public Feedback deleteFeedback(Long feedbackId) { 
        Optional<Feedback> ops = feedbackRepo.findById(feedbackId);
        if(ops.isPresent()){
            feedbackRepo.deleteById(feedbackId);
            return ops.get();
        }else{
            return null;
        }    
    }

    @Override
    public User getUserByUserId(Long userId) {
       Optional<User> ops = userRepo.findById(userId);

       if(ops.isPresent()){
        return ops.get();
       }
       else{
        return null;
       }
    }

    @Override
    public Feedback updateWithUser(Long userId, Feedback feedback) {
        User existUser=userRepo.findById(userId).get();
       if(existUser!=null){
        feedback.setUser(existUser);
        return feedbackRepo.save(feedback);
       }else{
        return null;
       }
    }

   


    
}
