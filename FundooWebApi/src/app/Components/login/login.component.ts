import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from 'src/app/Model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {
  login:Login=new Login();
  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,private matsnackbar:MatSnackBar,  private userservice:UserService) { }

   emailId = new FormControl('',[Validators.required,Validators.email]);
   password= new FormControl('',[Validators.required,Validators.minLength(6)]);
  ngOnInit(): void {
  }


errorEmailMessage(){
  return this.emailId.hasError('required')? "Email required ":
   this.emailId.hasError('email')? "Enter Email-Id":
   this.emailId.hasError('pattern')?"Enter Email-Id - abc@gmail.com":
   "";
 }
 errorPasswordMessage(){
  return this.password.hasError('required')? "Password requred":
 this.password.hasError('minlength')? "Enter Min len 6":
   "";
 }

 onLoginSubmit(){
      this.login.password=this.password.value;
      this.login.email=this.emailId.value;
      this.userservice.loginUser(this.login).subscribe(  
      (response:any) =>{ 
       // console.log(response.statusCode);
        
        if(response.statusCode===200){
          localStorage.setItem('token',response.token);
          this.matsnackbar.open("sucessfull", "ok", {duration:3000})
          this.router.navigate(["/registration"]);
        }else{
          this.matsnackbar.open("Login failed", "", {duration:3000})
        }
      },
      (error:any)=> {
        this.matsnackbar.open("failed", "", {duration:3000})
      });
    }
}