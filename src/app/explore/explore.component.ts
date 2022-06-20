import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
    isAuthenticated=false;
  constructor(private loginuserService:LoginuserService,private router:Router) { }

  ngOnInit():void {
    
    }
  

  Logout(){
    sessionStorage.removeItem('token')
      this.router.navigate(['/'])
    
  }
    
  }

