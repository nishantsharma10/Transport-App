import { Component, OnInit } from '@angular/core';
import { Userl } from '../userl';
import { LoginuserService } from '../loginuser.service';
import { HttpErrorResponse } from '@angular/common/http';
//import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class UserloginComponent implements OnInit {
  user=new Userl();
  //isLoginError:boolean=false;

  constructor(private loginuserservice:LoginuserService) { }

  ngOnInit(): void {
   
  }
  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      console.log(JSON.stringify(data));
          sessionStorage.setItem('token',JSON.stringify(data))})
  
    ,console.error();
    ()=>alert("Sorry Plaese enter correct details")
    
      //this.isLoginError=true;
     // err=>alert("Sorry Plaese enter correct details")
    

  }

}
