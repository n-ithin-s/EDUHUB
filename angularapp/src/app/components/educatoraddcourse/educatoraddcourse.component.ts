import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educatoraddcourse',
  templateUrl: './educatoraddcourse.component.html',
  styleUrls: ['./educatoraddcourse.component.css']
})
export class EducatoraddcourseComponent implements OnInit {
addForm:FormGroup;
showModal=false;
showModal1=false;
  constructor(private service:CourseService,private builder:FormBuilder,private rt:Router) { 
    this.addForm=this.builder.group({
      title:builder.control("",Validators.required),
      description:builder.control("",Validators.required),
      courseStartDate:builder.control("",Validators.required),
      courseEndDate:builder.control("",Validators.required),
      category:builder.control("",Validators.required),
      level:builder.control("",Validators.required)
    });
  }
  public get title(){
    return this.addForm.get("title");
  }
  public get description(){
    return this.addForm.get("description");
  }
  public get courseStartDate(){
    return this.addForm.get("courseStartDate");
  }
  public get courseEndDate(){
    return this.addForm.get("courseEndDate");
  }
  public get category(){
    return this.addForm.get("category");
  }
  public get level(){
    return this.addForm.get("level");
  }
  ngOnInit(): void {
  }
  addCourse(){
  
      let newCourse = this.addForm.value;
      
      return this.service.addCourse(newCourse).subscribe((data)=>{
        this.showModal=true;
        Swal.fire({
          text: "Course added successfully!",
          icon: "success"
        });
        this.addForm.reset();
       
      },
      (error) => {
        // this.showModal1=true;
        Swal.fire({
          text: "Course already exists!",
          icon: "warning"
        });
        this.addForm.reset();
        console.log(error.error);
        // alert(error.error)
      });
  
  }

  validateDates() {
    const startDate = new Date(this.addForm.value.courseStartDate);
    const endDate = new Date(this.addForm.value.courseEndDate);
 
    if (startDate && endDate && startDate > endDate) {
      this.courseEndDate.setErrors({ 'invalid': true });
    } else {
      this.courseEndDate.setErrors(null);
    }
  }
  closeModal(){
    this.showModal=false;
    this.addForm.reset();
    setTimeout(()=>{

      this.rt.navigate(['/educatorviewcourse']);
},100)
  }
  validateStartDate(){
    const startDate=new Date(this.addForm.value.courseStartDate);
    let sysdate:Date=new Date();
 
    if(startDate < sysdate){
      this.courseStartDate.setErrors({'newInvalid':true})
    }
    else{
      this.courseStartDate.setErrors(null);
    }
  }
  back(){
    this.rt.navigate(['/home']);
  }
  closeModal1(){
    this.showModal1=false;
  }
}
