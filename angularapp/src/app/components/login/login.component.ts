import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showInvalidCredentialsModal = false;
  loginForm: FormGroup;
  hidePassword = true;

  constructor(private builder: FormBuilder, private service: AuthService, private route: Router) {
    this.loginForm = this.builder.group({
      email: builder.control("", [Validators.required, Validators.email]),
      password: builder.control("", Validators.required)
    });
  }

  ngOnInit(): void {

  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  public get email() {
    return this.loginForm.get("email");
  }

  public get password() {
    return this.loginForm.get("password");
  }
  // from the backend we are getting all the user details 
  // as well as the token and we are storing it in local storage
  login() {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe(data => {

        console.log("login data is " + JSON.stringify(data))
        localStorage.setItem('currentUser', JSON.stringify(data))

        let myToken: string = data.token
        console.log(myToken)
        localStorage.setItem('token', myToken);
        localStorage.setItem("email", data.email)
        localStorage.setItem("role", data.role)
        localStorage.setItem("username", data.username)
        localStorage.setItem("userId", data.userId)
        console.log("Token----------->" + JSON.stringify(data.token))
        console.log("role got it ----------->" + JSON.stringify(data.role))


        if (localStorage.getItem('role') == 'EDUCATOR') {
          this.route.navigate(['/'])
        }
        else if (localStorage.getItem('role') == 'STUDENT') {
          this.route.navigate(['/'])
        }
        Swal.fire({
          title: "Hi! "+localStorage.getItem('username'),
          text: "You have successfully logged in!",
          icon: "success"
        });
      },
        (error) => {
          console.log(error.error);
          this.showInvalidCredentialsModal = true;
        }
      );
    }
  }

  closeModal() {
    this.showInvalidCredentialsModal = false;
  }
}
