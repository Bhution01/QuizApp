import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../register.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { style } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new User(" "," ",0," ");
  answer:Boolean=false;
  uniqueUser: any;

  constructor(private registerService:RegisterService, private router:Router){}

  saveUser(){
    this.registerService.saveUser(this.user).subscribe(ans=>{this.answer=ans
    
      if(this.answer==true){

        this.router.navigate(['login']);
        // sessionStorage.setItem("Loginmsg",this.user.username+" "+"You Are Registered plz Login")
      }else{
        this.uniqueUser = "username exist, please change username"
      }
    })
  }
}
