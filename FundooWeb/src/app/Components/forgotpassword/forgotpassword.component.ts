import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor() { }
  emailId = new FormControl(null,[Validators.required,Validators.email]);

  ngOnInit(): void {
  }

  errorEmailMessage(){
    return this.emailId.hasError('required')? "Enter Fields":
     this.emailId.hasError('email')? "Enter Email-Id":
     this.emailId.hasError('pattern')?"Enter Email-Id - abc@gmail.com":
     "";
   }
}
