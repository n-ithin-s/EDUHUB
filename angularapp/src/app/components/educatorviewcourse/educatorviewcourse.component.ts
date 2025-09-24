import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Material } from 'src/app/models/material.model';
import { CourseService } from 'src/app/services/course.service';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { MaterialService } from 'src/app/services/material.service';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-educatorviewcourse',
  templateUrl: './educatorviewcourse.component.html',
  styleUrls: ['./educatorviewcourse.component.css']
})
export class EducatorviewcourseComponent implements OnInit {
  loader=true;
  search:string="";
  courses:Course[]=[];
  materials:Material[] = [] ;
  showModal=false;
  mid:number;
  showModal1:boolean=false;
  cid: string;
  showModal2: boolean=false;
  constructor(private service:CourseService, private mservice:MaterialService,private router:Router,private enrolservice:EnrollmentService,private sanitizer:DomSanitizer) { }
 
  ngOnInit(): void {
    this.getAllCourses();
    this.getAllMaterial();
  }
  public getAllMaterial(){
    this.mservice.getAllMaterial().subscribe(data=>this.materials=data);
  }
  public getAllCourses(){
    this.service.getAllCourses().subscribe(data=>{
      this.courses=data
      this.loader=false;
    })
  }
 
  public deleteCourse(){
    this.loader=true;
    this.enrolservice.getEnrolledCoursesByCourse(this.cid).subscribe(data=>{
      for(let i=0;i<data.length;i++){
        if(data[i].status!=null){
          Swal.fire({
            text: "Course already exists!",
            icon: "warning"
          });
        }
      }
    })
 

  }
  // public searchData(){

  //   this.courses=this.courses.filter(data=>
  //     JSON.stringify(data).toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
  //     this.getAllCourses();
  // }
  searchData(){
    if(this.search==''){
      this.getAllCourses();
    }else{
    this.courses=this.courses.filter(data=>
      JSON.stringify(data).toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
      //this.loadCourses();
  }
}
 
  public editCourse(c:any){
    this.router.navigate(['/educatoreditcourse'],
    {queryParams:{courseid:c.courseid,title:c.title,description:c.description,courseStartDate:c.courseStartDate,courseEndDate:c.courseEndDate,category:c.category,level:c.level}})
  }

  public addMaterial(courseid:number){
    this.router.navigate(['/educatoraddmaterial'], { queryParams: { courseid: courseid } });
    
    
  }
 
  public deleteMaterial(){
    this.loader=true;
    
    // this.mservice.deleteMaterial(this.mid).subscribe(data=>
    //   {
    //     // this.getAllMaterial();
    //     this.showModal=false;
    //     this.showModal1=false;
    //     this.loader=false;
    //   })
 
  }
 
  public viewMaterial(courseid:string){
    
    
    
    this.mservice.getMaterialsByCourseId(courseid).subscribe(data=>{
      this.showModal=true;

      console.log("the array of materials is "+data)
      this.materials=data
    })
   
  }

  public onsubmit(id:number) {
    this.mid = id;
    // this.mservice.deleteMaterial(this.mid).subscribe(data=>
      // {
        
        
        this.loader=false;
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            this.mservice.deleteMaterial(this.mid).subscribe(data=>{
              this.closeModal();
            })
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            
            });
            // this.closeModal();
          }
        });
        // this.showModal=false;
        // this.showModal1=false;
        
     
    // this.showModal = false;
  }

  
  public onSubmitCourse(id:string) {
    this.cid = id;
    // this.showModal2 = true;
    // this.service.deleteCourse(this.cid).subscribe(data=>{
      // this.loader=false;
      this.enrolservice.getEnrolledCoursesByCourse(this.cid).subscribe(data=>{
        for(let i=0;i<data.length;i++){
          if(data[i].status!=null){
            Swal.fire({
              text: "Course is already enrolled!",
              icon: "warning"
            });
            return;
          }
          
        }

        // if(this.materials.length==0){
        //   Swal.fire({
        //     text: "Course is already enrolled!",
        //     icon: "warning"
        //   });
        //   return
        // }

        this.mservice.getMaterialsByCourseId(this.cid).subscribe(val=>{
          if(val.length>0){
            Swal.fire({
              title: "couldn't delete!",
              text: "material exists!",
              icon: "warning"
            });
            return;
          }
       
         

            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                this.service.deleteCourse(this.cid).subscribe(data=>{
                  this.getAllCourses();
                })
               
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            });

          });
          });
      
      
    
  }
  
  
  closeModal(){
    this.showModal=false;
  }
  
  cancelModal(){
    this.showModal1=false;
    this.showModal2=false;
  }
 
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
 
}