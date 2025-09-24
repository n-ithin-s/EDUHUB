import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Enrollment } from 'src/app/models/enrollment.model';
import { User } from 'src/app/models/user.model';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-enrollmentlist',
  templateUrl: './enrollmentlist.component.html',
  styleUrls: ['./enrollmentlist.component.css']
})
export class EnrollmentlistComponent implements OnInit {
loader=true;
enrollments:Enrollment[]=[];
filteredEnrollments: Enrollment[] = [];
search:string="";
selectedStatus: string = "All";
newEnrollment:any=null;
showModal=false;
user:User;
  constructor(private service:EnrollmentService,private fservice:FeedbackService) { }

  ngOnInit(): void {
    this.getAllEnrollments();
  }
  getAllEnrollments(){
    return this.service.getAllEnrollments().subscribe(value=>{
      this.enrollments=value;
      this.filteredEnrollments = value;
      this.loader=false;
    });
  }
  acceptEnrollment(enrollment: any): void {
    let sysdate:Date=new Date();
    let dp=new DatePipe("en-US");
    let myDatestr=dp.transform(sysdate,"yyyy-MM-dd");
    this.newEnrollment={enrollmentDate:myDatestr,status:'Approved'}
    this.service.updateEnrollmentStatus(enrollment.enrollmentId,this.newEnrollment).subscribe(data=>{
      console.log("updated status >>>>"+JSON.stringify(data))
    })
    enrollment.status = 'Approved';
    this.filterEnrollments();
  }
  rejectEnrollment(enrollment: any): void {
 
    let sysdate:Date=new Date();
    let dp=new DatePipe("en-US");
    let myDatestr=dp.transform(sysdate,"yyyy-MM-dd");
    this.newEnrollment={enrollmentDate:myDatestr,status:'Rejected'}
    this.service.updateEnrollmentStatus(enrollment.enrollmentId,this.newEnrollment).subscribe(data=>{
      console.log("updated status >>>>"+JSON.stringify(data))
    })
    enrollment.status = 'Rejected';
    this.filterEnrollments();
  }

  // searchData(){
  //   this.enrollments=this.enrollments.filter(data=>
  //     JSON.stringify(data).toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
  //     this.getAllEnrollments();
  // }
  searchData(){
    if(this.search==''){
      this.getAllEnrollments();
    }else{
    this.enrollments=this.enrollments.filter(data=>
      JSON.stringify(data).toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
      //this.loadCourses();
  }
}
 
  filterEnrollments() {
    if (this.selectedStatus == 'All') {
      // this.ngOnInit();
      // Show the entire array when "All" is selected
      this.enrollments = [...this.filteredEnrollments]; // Assuming you have an original copy of enrollments
    } else {
      // Filter based on the selected status
      this.enrollments = this.filteredEnrollments.filter(enrollment => {
        return enrollment.status.toLowerCase() === this.selectedStatus.toLowerCase();
      });
    }
  }

 
  closeModal() { // Add this method
    this.showModal = false; // Hide the modal
  }
 

  public showMore(id:string){
  this.fservice.getUserDetailByUserId(id).subscribe(data=>this.user=data);
  this.showModal=true;
  }

}
 