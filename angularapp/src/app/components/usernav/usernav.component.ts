import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent implements OnInit {
  username:string;
  showModal=false;
  constructor(private service:AuthService,private route:Router) { }
  
  ngOnInit(): void {
    this.username=localStorage.getItem('username')
  }

  onSubmit() {
      this.showModal=true;
  }
  closeModal() { // Add this method
    this.showModal = false; // Hide the modal
  }

  logout(){
    console.log("coming back")
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    setTimeout(()=>{
      
      this.route.navigate(['/home'])
    },1000)
    Swal.fire({
      title: "Have a nice day! "+ localStorage.getItem('username'),
      text: "Please visit here again,Thanks!",
      icon: "success"
    });
    
  }

}
