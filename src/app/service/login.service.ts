import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  url ="http://localhost:8080/UserRegistration"

  constructor(private http:HttpClient) { }

  // calling the server to generate token
  doLogin(credentials:any){
    return this.http.post(`${this.url}/Login`,credentials)
    
  }

 

  //for login user
  loginUser(token: string)
  {
     
     //var obj = JSON.stringify(token);
     localStorage.setItem("token",token)
     return true;
  }
}
