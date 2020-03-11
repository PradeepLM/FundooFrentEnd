import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { UserserviceService } from 'src/app/Service/userservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user:UserserviceService=new UserserviceService();
  constructor() { }
  

  ngOnInit(): void {
  }
  phoneNumber=new FormControl(null,[Validators.required,Validators.pattern('[0-9]{10,10}')]);
  Name=new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]')]);
  email = new FormControl(null,[Validators.required,Validators.email]);
  password= new FormControl(null,[Validators.required,Validators.minLength(6)]);

  errorPhoneNumberMessage(){
    return this.phoneNumber.hasError('required')? "Enter Fields":
    this.phoneNumber.hasError('pattern')? "Enter 10 Digits":
    "";
   }

  errorNameMessage(){
    return this.Name.hasError('required')? "Enter Fields":
    this.Name.hasError('pattern')?"Enter Characters":
     "";
   }

  errorEmailMessage(){
    return this.email.hasError('required')? "Enter Fields":
     this.email.hasError('email')? "Enter Email-Id":
     "";
   }
   errorPasswordMessage(){
    return this.password.hasError('required')? "Enter Fields":
   this.password.hasError('minlength')? "Enter Min len 6":
     "";
   }
}
