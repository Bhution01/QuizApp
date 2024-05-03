import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient ) { }

  saveUser(user:User){
    console.log(user);
   return this.httpClient.post<Boolean>("http://localhost:9090/saveUserr",user)
  }
}


export class User{
  username:string;
  password:string;
  mobno:number;
  emailid:string;

  constructor(username:string,password:string,mobno:number,emailid:string){
    this.username=username;
    this.password=password;
    this.mobno=mobno;
    this.emailid=emailid;


  }
}