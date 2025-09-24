import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiUrl:string = environment.backendUrl+"/api/course";
  constructor(private http:HttpClient) { }

  // private headers = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem(`token`)}`);

  public getAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl);
  }
  public getCourseById(id:string):Observable<Course>{
    return this.http.get<Course>(this.apiUrl+"/"+id);
  }
  public addCourse(requestObject:Course):Observable<Course>{
    return this.http.post<Course>(this.apiUrl,requestObject);
  }
  public updateCourse(id:string,requestObject:Course):Observable<Course>{
    return this.http.put<Course>(this.apiUrl+"/"+id,requestObject);
  }
  public deleteCourse(courseId:string):Observable<void>{
    return this.http.delete<void>(this.apiUrl+"/"+courseId);
  }
}
