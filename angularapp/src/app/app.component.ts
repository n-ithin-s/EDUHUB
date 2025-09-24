import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularapp';
  role:string=null
  ngOnInit(): void {
    this.getRole();
  }
  getRole(){
    this.role=localStorage.getItem('role')
  }
}
