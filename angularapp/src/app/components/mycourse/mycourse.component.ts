import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enrollment } from 'src/app/models/enrollment.model';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent implements OnInit {
  loader = true;
  enrollments: Enrollment[] = [];
  userId: number;
  eid: number;
  showModal = false;
  userEnrolled: Enrollment[] = [];
  constructor(private service: EnrollmentService, private route: Router) { }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('userId'));


    this.getEnrollmentByUserId();

  }

  public getEnrollmentByUserId() {
    // console.log("user id >>>>>>>"+this.userId);
    // this.service.getEnrolledCourses(this.userId).subscribe(data=>{
    //   console.log("Data>>>>"+data);
    //   this.enrollments=data
    // });
    this.service.getAllEnrollments().subscribe(data => {
      console.log(" all data is>>>" + JSON.stringify(data))
      this.enrollments = data;
      this.userEnrolled = [];


      this.enrollments.forEach(val => {

        if (val.user.userId == this.userId) {

          this.userEnrolled.push(val);
          console.log("user enrolled >>>" + JSON.stringify(this.userEnrolled))
        }
      })
      this.loader = false;
    })
  }

  public filterEnroll() {

  }

  public onsubmit(id: number) {
    this.eid = id;
    this.showModal = true;
  }

  public unenroll() {
    this.service.unenrollCourse(this.eid).subscribe(data => {
      this.showModal = false;

      // this.userEnrolled=this.userEnrolled.splice(this.eid,1)
      this.ngOnInit()
      Swal.fire({
        text: "Course have been unenrolled successfully!",
        icon: "success"
      });
    });
  }

  public cancelModal() {
    this.showModal = false;
  }

}