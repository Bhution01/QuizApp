import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  validateUser(user:User){
   return this.httpClient.post<Boolean>("http://localhost:9090/validateUser",user)
  }
}
