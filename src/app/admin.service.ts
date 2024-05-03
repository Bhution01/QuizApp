import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  validateUser(user:User){
   return this.httpClient.post<boolean>("http://localhost:9090/validateAdmin",user);
  }
}
