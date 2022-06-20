import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Userl } from './userl';


@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl="http://localhost:8181/login";


  isLogInError: boolean = false;    
  // store the URL so we can redirect after logging in
  public redirectUrl: any;

  constructor(private httpClient:HttpClient,private router:Router) { }
  loginUser(user:Userl):Observable<any>{
  
  return this.httpClient.post(`${this.baseUrl}`,user, {responseType: 'text'}).pipe(
    map(() => {
    // do whatever with your response
    this.router.navigate(['/explore']);
}))
}


  getAuthToken() {
    return sessionStorage.getItem('token');
 }
}