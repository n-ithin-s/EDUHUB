import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  role:string=null;
  newForm:FormGroup
  constructor(private route: ActivatedRoute,private builder:FormBuilder,private service:ContactService) { 
    this.newForm=builder.group({
      name:builder.control('',Validators.required),
      email:builder.control('',Validators.required),
      message:builder.control('',Validators.required)
    })
  }

  ngOnInit() {
    this.getRole();
  }
  getRole(){
    this.role=localStorage.getItem('role')
  }

  public get name(){
    return this.newForm.get("name");
  }

  public get email(){
    return this.newForm.get("email");
  }

  public get message(){
    return this.newForm.get("message");
  }

  addContact(){
    console.log("contact form value  "+JSON.stringify(this.newForm.value))
    this.service.addContact(this.newForm.value).subscribe(data=>{

      Swal.fire({
        
        text: "Message delivered successfully!",
        icon: "success"
      });
      this.newForm.reset();
    })
  }

}
