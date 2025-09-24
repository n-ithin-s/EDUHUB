import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  role:string=null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRole();
  }
  getRole(){
    this.role=localStorage.getItem('role')
  }
}
