import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Material } from 'src/app/models/material.model';
import { CourseService } from 'src/app/services/course.service';
import { MaterialService } from 'src/app/services/material.service';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-educatoraddmeterial',
  templateUrl: './educatoraddmeterial.component.html',
  styleUrls: ['./educatoraddmeterial.component.css']
})
export class EducatoraddmeterialComponent implements OnInit {
 addMaterialForm:FormGroup;
 showModel = false;
 material:Material=null;
 
addedMaterial:Material={title:'',description:'',url:'',uploadDate:'',contentType:'',course:null}
courseid:string;
currentCourse:Course;
  constructor(private service:MaterialService,private router:Router,private builder:FormBuilder,private act:ActivatedRoute,private courseService:CourseService) {
 
    this.addMaterialForm = builder.group({
      title:builder.control("",Validators.required),
      description:builder.control("",Validators.required),
      url:builder.control("",Validators.required),
      youTube:builder.control("",Validators.required),
      contentType:builder.control("",Validators.required)
     
    })
  }
 
 
   public get title(){
    return this.addMaterialForm.get("title");
   }
 
   public get description(){
    return this.addMaterialForm.get("description");
   }
 
   public get url(){
    return this.addMaterialForm.get("url");
   }
   public get youTube(){
    return this.addMaterialForm.get("youTube");
   }
   public get contentType(){
    return this.addMaterialForm.get("contentType");
   }
 
 
 
 
 
  ngOnInit(): void {
    this.courseid=(this.act.snapshot.queryParamMap.get("courseid"));
    this.courseService.getCourseById(this.courseid).subscribe(data=>{
      this.currentCourse=data;
    })
   
  }
 
 
  public addMaterial(){
    // this.showModel=true;
 
 
    console.log("current course +++ from params>>>"+JSON.stringify(this.currentCourse))
 
    this.addedMaterial = this.addMaterialForm.value;
 
    let sysdate:Date=new Date();
    let dp=new DatePipe("en-US")
    let myDatestr=dp.transform(sysdate,"yyyy-MM-dd");
    this.addedMaterial.uploadDate=myDatestr;
 
    // this.addedMaterial.course=this.currentCourse;
    console.log("added material before sending>>>>>"+JSON.stringify(this.addedMaterial));
 
    // console.log("current course from params>>>"+JSON.stringify(this.currentCourse))
    // this.addedMaterial.course=this.currentCourse;   // showing error
    // this.addedMaterial.uploadDate=new Date();
    // console.log("added material before service: "+JSON.stringify(this.addedMaterial))
 
    this.service.addMaterial(this.addedMaterial).subscribe(data=>{
 
      console.log("added material after database: "+JSON.stringify(data))
      
      this.service.updateMaterialWithCourse(this.currentCourse.courseid,data).subscribe(value=>{
        console.log("course received from backend>>>>>"+JSON.stringify(value));
        Swal.fire({
          text: "Material added successfully!",
          icon: "success"
        });
       this.router.navigate(['/educatorviewcourse'])
      })    
 
      console.log("added material : "+JSON.stringify(data))
 
 
     
    })
  }
  closeModal(){
    this.showModel=false;
    this.router.navigate(['/educatorviewcourse'])
  }
}