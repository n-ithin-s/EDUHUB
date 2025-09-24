package com.examly.springapp.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.config.JwtUtils;
import com.examly.springapp.model.LoginObject;
import com.examly.springapp.model.User;
import com.examly.springapp.service.UserService;
import com.examly.springapp.utils.Util;

@RestController
@CrossOrigin(origins = Util.FRONTEND,allowedHeaders="*")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/api/register")
    public ResponseEntity<User> registerUser(@RequestBody User user){
        User newUser=userService.registerUser(user);
        if(newUser!=null){
            return new ResponseEntity<>(newUser,HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }
    @PostMapping("/api/login")
    public LoginObject AuthenticateAndGetToken(@RequestBody User user){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        User existUser=userService.loginUser(user);
        if(authentication.isAuthenticated()){
            LoginObject myUser = new LoginObject();
            myUser.setEmail(existUser.getEmail());
            myUser.setMobileNumber(existUser.getMobileNumber());
            myUser.setUserId(existUser.getUserId());
            myUser.setRole(existUser.getRole());
            myUser.setUsername(existUser.getUsername());
            myUser.setToken(jwtService.GenerateToken(user.getEmail()));
            return myUser;
        }
         else {
            throw new UsernameNotFoundException("invalid user request..!!");
        }
    }
    
}
