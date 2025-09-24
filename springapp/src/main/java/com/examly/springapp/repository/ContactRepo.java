package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Contact;

@Repository
public interface ContactRepo extends JpaRepository<Contact,Long>{

}
