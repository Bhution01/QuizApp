import { Component } from '@angular/core';
import { User } from '../register.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Loginmsgg:any;
  user = new User(" "," ",0," ");
  answerr:Boolean=false;
  subject:any;

  constructor(private loginService:LoginService, private router:Router){
    // this.Loginmsgg = sessionStorage.getItem("Loginmsg");
  }

  validateUser(){
        this.loginService.validateUser(this.user).subscribe(answ=>{this.answerr=answ

          if(this.answerr){
            this.router.navigate(['welcome']);
            sessionStorage.setItem("welcomemsg","welcome"+" "+this.user.username)
            sessionStorage.setItem("subject",this.subject);
          }

        })
  }
}
