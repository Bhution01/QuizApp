import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent { 

  user = new User(" "," ",0," ");
  answer:boolean = false;

  constructor(private adminService:AdminService, private router:Router){

  }

  validateAdmin(){
    this.adminService.validateUser(this.user).subscribe(ans=>{this.answer=ans

      if(this.answer){
        console.log("routerabove")
        this.router.navigate(['question-add'])
      } 
    })
  }
}
