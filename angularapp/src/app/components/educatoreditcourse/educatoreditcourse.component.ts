import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educatoreditcourse',
  templateUrl: './educatoreditcourse.component.html',
  styleUrls: ['./educatoreditcourse.component.css']
})
export class EducatoreditcourseComponent implements OnInit {
editForm:FormGroup;
selectedCourse:Course=null;
  courseid:string;
  title:string;
  description:string;
  courseStartDate: string;
  courseEndDate: string;
  category:string;
  level:string;
  constructor(private service:CourseService,private rt:Router,private act:ActivatedRoute) { 
    // this.editForm=this.builder.group({
    //   title:builder.control("",Validators.required),
    //   description:builder.control("",Validators.required),
    //   courseStartDate:builder.control("",Validators.required),
    //   courseEndDate:builder.control("",Validators.required),
    //   category:builder.control("",Validators.required),
    //   level:builder.control("",Validators.required)
    // })
  }
  // public get title(){
  //   return this.editForm.get("title");
  // }
  // public get description(){
  //   return this.editForm.get("description");
  // }
  // public get courseStartDate(){
  //   return this.editForm.get("courseStartDate");
  // }
  // public get courseEndDate(){
  //   return this.editForm.get("courseEndDate");
  // }
  // public get category(){
  //   return this.editForm.get("category");
  // }
  // public get level(){
  //   return this.editForm.get("level");
  // }

  ngOnInit(): void {
    this.courseid=(this.act.snapshot.queryParamMap.get("courseid"))
    this.title=this.act.snapshot.queryParamMap.get("title")
    this.description=this.act.snapshot.queryParamMap.get("description")
    this.courseStartDate = this.act.snapshot.queryParamMap.get('courseStartDate');
    this.courseEndDate = this.act.snapshot.queryParamMap.get('courseEndDate');
    this.category=this.act.snapshot.queryParamMap.get("category")
    this.level=this.act.snapshot.queryParamMap.get("level")

    console.log(this.courseid+".........."+this.description+">>>>>>>"+this.courseStartDate)
  }

  // onDateChange(event: any, dateType: string) {
  //   if (dateType === 'courseStartDate') {
  //     this.courseStartDate = this.convertToDate(event);
  //   } else if (dateType === 'courseEndDate') {
  //     this.courseEndDate = this.convertToDate(event);
  //   }
  // }

  // convertToDate(dateString: string): Date {
  //   const [day, month, year] = dateString.split('-');
  //   return new Date(`${year}-${month}-${day}`);
  // }

  updateCourse(){
    this.selectedCourse={courseid:this.courseid,title:this.title,description:this.description,courseStartDate:this.courseStartDate,courseEndDate:this.courseEndDate,category:this.category,level:this.level}
      this.service.updateCourse(this.selectedCourse.courseid,this.selectedCourse).subscribe(()=>{
        this.selectedCourse=null;
        this.rt.navigate(['/educatorviewcourse']);
        Swal.fire({
          text: "Course have been updated successfully!",
          icon: "success"
        });
      })
  
  }
  back(){
    this.rt.navigate(['/educatorviewcourse']);
  }

}
