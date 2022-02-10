import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {
    emailId:'',
    password:''
  }
  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.emailId!='' && this.credentials.password!='') && (this.credentials.emailId!=null && this.credentials.password!= null)){
      console.log("We have to submit the form to server");
      // to generate token 
      this.loginService.doLogin(this.credentials).subscribe(
        
        (response:any)=>{
          console.log(response)
          // this.loginService.loginUser(response.token)
          // window.location.href="/dashboard"
          localStorage.setItem("token",response.data)
          this.router.navigate(["/homepage"])
         

        },
        errors=>{
        console.log(errors);

        }
      )


    }else{
      console.log("Fields are empty...!")
    }

  }
}
