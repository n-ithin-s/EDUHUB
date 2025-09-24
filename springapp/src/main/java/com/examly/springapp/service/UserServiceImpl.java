package com.examly.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.UserExistException;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;

@Service("userService")
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public User registerUser(User user){
        User existUser = userRepo.findByUsername(user.getUsername());
        if(existUser!=null){
            throw new UserExistException("User already exist");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }
    @Override
    public User loginUser(User user) {
        User fetchedUser = userRepo.findByEmail(user.getEmail());
        return fetchedUser;
    }
    
}
