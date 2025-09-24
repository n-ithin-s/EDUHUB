import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course.model';
import { Router } from '@angular/router';
import { MaterialService } from 'src/app/services/material.service';
import { Material } from 'src/app/models/material.model';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { Enrollment } from 'src/app/models/enrollment.model';
import { DatePipe } from '@angular/common';
import { FeedbackService } from 'src/app/services/feedback.service';
import { User } from 'src/app/models/user.model';
import Swal from 'sweetalert2';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
 
@Component({
  selector: 'app-studentviewcourse',
  templateUrl: './studentviewcourse.component.html',
  styleUrls: ['./studentviewcourse.component.css']
})
export class StudentviewcourseComponent implements OnInit {
  loader = true;

  courses:Course[]=[];
  materials:Material[]=[];
  showModal=null;
  showMaterial=false;
  search:string='';
  courseId:string;
  viewModal=false;
  enrollment:Enrollment;
  newcourse:Course;
  userId:string;
  newUser:User;
  unenrolled:boolean=false;
  enrolledUser:Enrollment[]=[];
  isApproved:boolean=false;
  constructor(private service:CourseService,private route:Router,private materialService:MaterialService,private enrolservice:EnrollmentService,private feedservice:FeedbackService,private sanitizer:DomSanitizer) { }
 
  ngOnInit(): void {
    this.userId=localStorage.getItem('userId');
    this.loadCourses();
    this.getEnrollmentByUser()
    // this.isApplied();
   
  }
  public loadCourses(){
    this.service.getAllCourses().subscribe(val=>{
      this.courses=val;
    })
  }
 
 
 
  public studentEnrollCourse(){
    this.unenrolled=true;
    this.courseId=this.showModal;
    // this.service.getCourseById(this.courseId).subscribe(data=>this.newcourse=data);
    console.log("userid is"+this.userId)
    // this.feedservice.getUserDetailByUserId(this.userId).subscribe(data=>this.newUser=data);
    // console.log("new user is "+JSON.stringify(this.newUser))
    this.viewModal=true;
    
    let sysdate:Date=new Date();
    let dp=new DatePipe("en-US");
    let myDatestr=dp.transform(sysdate,"yyyy-MM-dd");
    this.enrollment={enrollmentDate:myDatestr,status:"Pending"}
   
 
    this.enrolservice.addEnrollment(this.enrollment).subscribe(data=>{
        this.enrolservice.updateEnrollment(this.userId,this.courseId,data).subscribe(val=>{
              console.log("enrollment after adding user and course "+JSON.stringify(val));
               this.showModal=false;
               
              this.route.navigate(['/mycourse'])
                Swal.fire({
                  text: "Course have been enrolled successfully!",
                  icon: "success"
                });
               
        })
    });
 
  }
  public studentViewMaterial(courseId:string){
    this.materialService.getMaterialsByCourseId(courseId).subscribe(data=>{
      this.materials=data;
      
      console.log("material of course========>"+JSON.stringify(this.materials));
     
    });
 
 
    
    this.showMaterial=true;
    
  }
 
  public getEnrollmentByUser(){
    this.enrolservice.getEnrolledCourses(this.userId).subscribe(data=>{
      console.log("enrolled coursed by user id>>>>"+JSON.stringify(data))
      this.enrolledUser=data;
    })
    this.loader = false;
  }
 
  cancelModal(){
    this.showModal=null;
  }
  cancelMaterial(){
    this.showMaterial=false;
  }
  showModal1(id:number){
    this.showModal=id;
  }
  searchData(){
    if(this.search==''){
      this.loadCourses();
    }else{
    this.courses=this.courses.filter(data=>
      JSON.stringify(data).toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
      //this.loadCourses();
  }
}
  back(){
    this.showMaterial=false;
    this.route.navigate(['/studentviewcourse']);
  }
 getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
 
  isApplied(id:any):boolean{
   
      console.log("show model ******&&&&&"+id)
      for(let j=0;j<this.enrolledUser.length;j++){
        if(this.enrolledUser[j].course.courseid==id){
          return true;
        }
     
    }
    return false;
  }

  public viewMaterialPower(id:any){
    for(let a=0;a<this.enrolledUser.length;a++){
      if(this.enrolledUser[a].course.courseid==id && this.enrolledUser[a].status=="Approved"){
        return true;
      }else{
       
      }
  }
 
}
 
 
}
 