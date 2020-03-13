import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Service/user.service';
import { Resetpassword } from 'src/app/Model/resetpassword.model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,private matsnackbar:MatSnackBar,  private userservice:UserService) { }
  resetpassword:Resetpassword=new Resetpassword();
  ngOnInit(): void {
  }
  emailId = new FormControl(null,[Validators.required,Validators.email]);
  password= new FormControl(null,[Validators.required,Validators.minLength(6)]);


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

   onResetSubmit(){
     this.resetpassword.newPassword=this.password.value;
     this.resetpassword.confirmPassword=this.password.value;
     this.resetpassword.email=this.emailId.value;
     this.userservice.resetPasswordUser(this.resetpassword).subscribe(  
      (response:any) =>{
         this.matsnackbar.open("sucessfull", "ok", {duration:5000})
      },
      error=> {
        this.matsnackbar.open("failed", "", {duration:5000})
      });
   }

}
