import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import { MaterialService } from 'src/app/services/material.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  showInvalidCredentialsModal = false;
  registrationForm: FormGroup;
  hidePassword = true;
  hidePassword1 = true;
  // Builder is used to create form group which has form controllers!
  constructor(private builder: FormBuilder, private auth: AuthService, private router: Router, private mat: MaterialService, private fed: FeedbackService) {
    this.registrationForm = builder.group({
      username: builder.control("", Validators.required),
      email: builder.control("", [Validators.required, Validators.email]),
      password: builder.control("", [Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/)]),
      confirmPassword: builder.control("", Validators.required),
      mobileNumber: builder.control("", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
      role: builder.control("", Validators.required)
    })
  }
  // getters for form controllers
  public get username() {
    return this.registrationForm.get("username");
  }
  public get email() {
    return this.registrationForm.get("email");
  }
  public get password() {
    return this.registrationForm.get("password");
  }
  public get confirmPassword() {
    return this.registrationForm.get("confirmPassword");
  }
  public get mobileNumber() {
    return this.registrationForm.get("mobileNumber");
  }
  public get role() {
    return this.registrationForm.get("role");
  }



  ngOnInit(): void {
  }
  
  public register() {
    this.auth.register(this.registrationForm.value).subscribe(data => {
      console.log("data from registration" + JSON.stringify(data))
      this.router.navigate(['/login']);
      Swal.fire({
        title: "Hi! "+ data.username,
        text: "You have successfully registered!",
        icon: "success"
      });
    }, (error) => {
      console.log(error.error);
      this.showInvalidCredentialsModal = true;
    }
    );
  }

  passwordMatch() {
    if (this.registrationForm.value.password != this.registrationForm.value.confirmPassword) {
      document.getElementById("matherror").innerHTML = "confirm password doesn't match"
    }
    else {
      document.getElementById("matherror").innerHTML = ""
    }
  }
  // it is used for the visibility of password (eye)
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  // it is used for the visibility of confirm-password (eye)
  togglePasswordVisibility1() {
    this.hidePassword1 = !this.hidePassword1;
  }


  // it is used for closing the invalid error model
  closeModal() {
    this.showInvalidCredentialsModal = false;
  }

}