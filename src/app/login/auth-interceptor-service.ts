import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { LoginuserService } from '../loginuser.service';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

        constructor(private loginuserService:LoginuserService ) {} 
       intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
          const token = this.loginuserService.getAuthToken();
          const re= /login/gi;
          const ne= /register/gi;
      
         if ((request.url.search(re)===-1)&&(request.url.search(ne)===-1)) {
           // If we have a token, we set it to the header
           request = request.clone({
              setHeaders: {Authorization: `Bearer ${token}`}
           });
        }
      
        return next.handle(request).pipe(
            catchError((err) => {
              if (err instanceof HttpErrorResponse) {
                  if (err.status === 401) {
                  // redirect user to the logout page
               }
            }
            return throwError(err);
          })
         )
        }
      }
      

