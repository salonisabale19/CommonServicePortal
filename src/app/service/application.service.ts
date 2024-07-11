import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../model/application';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8081"

  createapplication(applicationform:Application):Observable<Application>{
    return this.httpClient.post<Application>(`${this.baseUrl}/addappli`,applicationform);
  }

  getapplicationlist():Observable<Application[]>{
    return this.httpClient.get<Application[]>(`${this.baseUrl}/getAllappli`);
  }

  deleteapplication(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/deleteappli/${id}`);
  }

  update(application:object):Observable<object>
  {
    return this.httpClient.put(`${this.baseUrl}/updateappli`,application);
  }

  search(id:number):Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/getOneappli/${id}`);
  }}

