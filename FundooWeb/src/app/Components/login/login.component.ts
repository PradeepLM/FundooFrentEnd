import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { UserModule } from 'src/app/Model/user/user.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {
  user:UserModule=new UserModule();
  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,private userservice:UserService) { }
  onloginSubmit(){
    
  }
   emailId = new FormControl(null,[Validators.required,Validators.email]);
   password= new FormControl(null,[Validators.required,Validators.minLength(6)]);
  ngOnInit(): void {
  }


errorEmailMessage(){
  return this.emailId.hasError('required')? "Enter Fields":
   this.emailId.hasError('email')? "Enter Email-Id":
   this.emailId.hasError('pattern')?"Enter Email-Id - abc@gmail.com":
   "";
 }
 errorPasswordMessage(){
  return this.password.hasError('required')? "Enter Fields":
 this.password.hasError('minlength')? "Enter Min len 6":
   "";
 }
}