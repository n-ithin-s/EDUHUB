import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl:string=environment.backendUrl;

  constructor(private http:HttpClient) { }

  public addContact(contact:Contact):Observable<any>{
    return this.http.post(this.apiUrl+"/contact",contact);
  }
}
