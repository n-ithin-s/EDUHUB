package com.examly.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Contact;
import com.examly.springapp.repository.ContactRepo;

@Service("contactService")
public class ContactServiceImpl implements ContactService{

    @Autowired
    ContactRepo contactRepo;

    @Override
    public Contact addContact(Contact contact) {
        return contactRepo.save(contact);
    }

}
