import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role:string=null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRole();
  }
  getRole(){
    this.role=localStorage.getItem('role')
  }

  


 

}
