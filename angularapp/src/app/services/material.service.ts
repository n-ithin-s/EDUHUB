import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../models/material.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  apiUrl:string= environment.backendUrl+"/api/material";
  constructor(private http:HttpClient) { }

    public getMaterialsByCourseId(coursed:string):Observable<any>{

      return this.http.get<any>(this.apiUrl+"/course/"+coursed);
    }
    public addMaterial(material:Material):Observable<Material>{

      return this.http.post<Material>(this.apiUrl,material);
    }
    public deleteMaterial(materialId:number):Observable<any>{
      return this.http.delete(this.apiUrl+"/"+materialId);
    }
    public getAllMaterial():Observable<any>{
      return this.http.get(this.apiUrl);
    }

    public updateMaterialWithCourse(courseId:string,material:Material):Observable<any>{
      return this.http.put(this.apiUrl+"/course/"+courseId,material);
     
    }
}
