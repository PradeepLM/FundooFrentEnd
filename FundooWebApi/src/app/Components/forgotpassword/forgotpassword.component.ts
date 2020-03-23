import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Forgotpassword } from 'src/app/Model/forgotpassword.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpassword:Forgotpassword=new Forgotpassword();
 

  constructor(private formBuilder:FormBuilder,private router:Router,private matsnackbar:MatSnackBar,  private userservice:UserService) { }
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
 

 onForgotPasswordSubmit(){
      this.forgotpassword.email=this.emailId.value;
      this.userservice.forgotPasswordUser(this.forgotpassword).subscribe(  
      (response:any) =>{
        localStorage.setItem("token",response.token)
         this.matsnackbar.open("link sent your mail", "ok", {duration:5000})
      },
      error=> {
        this.matsnackbar.open("failed", "", {duration:5000})
      });
    }
}
