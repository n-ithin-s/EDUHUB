import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enrollment } from '../models/enrollment.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  apiUrl:string= environment.backendUrl+"/api/enrollment";
  constructor(private http:HttpClient) { }
  public getAllEnrollments():Observable<Enrollment[]>{
    return this.http.get<Enrollment[]>(this.apiUrl);
  }
  // public enrollCourse(courseId:string,userId:string):Observable<Enrollment>{

  // }

  public addEnrollment(enrollment:Enrollment):Observable<Enrollment>{

    return this.http.post(this.apiUrl,enrollment);
  }

  public getEnrolledCourses(userId:string):Observable<Enrollment[]>{
    return this.http.get<Enrollment[]>(this.apiUrl+"/user/"+userId);
  }

  public getEnrolledCoursesByCourse(courseId:string):Observable<Enrollment[]>{
    return this.http.get<Enrollment[]>(this.apiUrl+"/course/"+courseId);
  }

  public updateEnrollmentStatus(id:string,enrollment:Enrollment):Observable<Enrollment>{
    return this.http.put(this.apiUrl+"/"+id,enrollment);
  }

  public unenrollCourse(enrollmentId:number):Observable<Enrollment>{
    return this.http.delete(this.apiUrl+"/"+enrollmentId)
  }

  public updateEnrollment(userId:string,courseId:string,enrollment:Enrollment):Observable<Enrollment>{
        return this.http.put(this.apiUrl+"/user/"+userId+"/course/"+courseId,enrollment);
       
  }

}
