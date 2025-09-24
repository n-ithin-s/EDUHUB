import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


 

  apiUrl:string=environment.backendUrl;

  //private headers = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem(`token`)}`);
  constructor(private http:HttpClient) { }

  public register(user:User):Observable<any>{
    return this.http.post(this.apiUrl+"/api/register",user);
  }
  public login(login:Login):Observable<any>{
    return this.http.post(this.apiUrl+"/api/login",login);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    // this.route.navigate(['/'])
  }

  getIsLoggedIn():boolean{
    if(localStorage.getItem('currentUser')){
      return true;
    }
    else{
      return false;
    }
  }

}
