package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Feedback;
import com.examly.springapp.model.User;

public interface FeedbackService {
    
    Feedback addFeedback(Feedback feedback);
    List<Feedback> getAllFeedback();
    List<Feedback> getAllFeedbackByUserId(Long userId);
    Feedback editFeedback(Long feedbackId, Feedback updatedFeedback);
    Feedback deleteFeedback(Long feedbackId);
    User getUserByUserId(Long userId);
    Feedback updateWithUser(Long userId, Feedback feedback);
    
    
}
