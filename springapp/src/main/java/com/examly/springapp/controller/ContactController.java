package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Contact;
import com.examly.springapp.service.ContactService;
import com.examly.springapp.utils.Util;

@RestController
@CrossOrigin(origins = Util.FRONTEND,allowedHeaders="*")
public class ContactController {

    @Autowired
    ContactService contactService;

    @PostMapping("/contact")
    public ResponseEntity<?> addContact(@RequestBody Contact contact){
        Contact newContact = contactService.addContact(contact);
        if(newContact!=null){
            return ResponseEntity.status(HttpStatus.CREATED).body(newContact);
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
