import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {

  constructor() { }
  emailId = new FormControl(null,[Validators.required,Validators.email,
    // Validators.pattern('([\w.+\-]+@gmail\.com)')
    ]);
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