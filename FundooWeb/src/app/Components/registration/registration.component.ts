import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';
import { UserModule } from 'src/app/Model/user/user.module';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user:UserModule=new UserModule();
  registerForm:FormGroup;
  submitted:boolean=false;
  showMsg:boolean=false;

  constructor(private formBuilder:FormBuilder,private userservice:UserService,private router:Router,private matSnackBar:MatSnackBar) { }
  

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


   onreigsterSubmit(){
    this.userservice.registerUser(this.registerForm.value).subscribe((user)=>{
      this.router.navigate(['/login']);
      this.showMsg=true;
      this.submitted=true;
      this.matSnackBar.open('Sucessfully Registration','OK',{duration:5000});
    },
    (error:any)=>{
      this.matSnackBar.open('Bad Creadiantial','OK',{duration:5000});
    });
  }
}
