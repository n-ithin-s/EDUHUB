import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {
  username:string;
  showModal=false;
  constructor(private service:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem('username')
  }


  logout(){
    // console.log("coming back")
    // localStorage.removeItem('token');
    // localStorage.removeItem('currentUser');
    // localStorage.removeItem('role');
    // localStorage.removeItem('email');
    // setTimeout(()=>{

    //   this.route.navigate(['/home'])
    // },1000)
    this.route.navigate(['/home']);
    Swal.fire({
      title: "Have a nice day! "+ localStorage.getItem('username'),
      text: "Please visit here again,Thanks!",
      icon: "success"
    });
    localStorage.clear();
  }

  onSubmit() {
    this.showModal=true;
}
closeModal() { // Add this method
  this.showModal = false; // Hide the modal
}

}
