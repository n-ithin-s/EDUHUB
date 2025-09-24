import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../models/feedback.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enrollment } from '../models/enrollment.model';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  public apiUrl= environment.backendUrl+"/api/feedback";
  constructor(private httpclient:HttpClient) { }

  public sendFeedback(feedback:any):Observable<any>{
    return this.httpclient.post(this.apiUrl,feedback);
  }

  public getAllFeedbacksByUserId(userId:number):Observable<any>{
    return this.httpclient.get(this.apiUrl+"/user/"+userId); 

  }

  public deleteFeedback(feedbackId:number):Observable<any>{
    return this.httpclient.delete(this.apiUrl+"/"+feedbackId);
  }

  public  getFeedbacks():Observable<any>{
    return this.httpclient.get(this.apiUrl);
  }

  public editFeedback(feedbackId:number,feedback:Feedback):Observable<any>{
    return this.httpclient.put(this.apiUrl+"/"+feedbackId,feedback);
  }

  public getUserDetailByUserId(userId:string):Observable<any>{
    return this.httpclient.get(this.apiUrl+"/"+userId);
  }


  // /user/{userId}

  public updateFeedbackWithUser(userId:string,feedback:Feedback):Observable<any>{
    return this.httpclient.put(this.apiUrl+"/user/"+userId,feedback);
  }




}