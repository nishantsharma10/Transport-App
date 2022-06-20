import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl="http://localhost:8181/register";
  constructor(private httpClinet: HttpClient) { }


  registerUser(user: User): Observable<object>{
  console.log(user);
  return this.httpClinet.post(this.baseUrl,user);
}

}
