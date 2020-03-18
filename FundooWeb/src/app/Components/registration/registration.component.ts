import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';
import { User} from 'src/app/Model/user.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user:User=new User();
  submitted:boolean=false;
  showMsg:boolean=false;

  constructor(private formBuilder:FormBuilder,private userservice:UserService,private router:Router,private matSnackBar:MatSnackBar) { }
  
                         
  ngOnInit(): void {
  }
  phoneNumber=new FormControl(null,[Validators.required,Validators.pattern('[0-9]{10,10}')]);
  Name=new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]);
  email = new FormControl(null,[Validators.required,Validators.email]);
  password= new FormControl(null,[Validators.required,Validators.minLength(6)]);
  conformpassword= new FormControl(null,[Validators.required,Validators.minLength(6)]);


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
  

   OnRegisterSubmit(){
      if(this.password.value==this.conformpassword.value){
        this.user.password=this.password.value;
        this.user.email=this.email.value;
        this.user.name=this.Name.value;
        this.user.mobileNumber=this.phoneNumber.value;
        this.userservice.registerUser(this.user).subscribe(  
        (response:any) =>{
           this.matSnackBar.open(response.message, "succesfull", {duration:5000})
        },
        (error:any)=> {
          this.matSnackBar.open(error.error.message, "failed", {duration:5000})
        });
      }
      else
      {
        this.matSnackBar.open("password didn't match","ok",{duration:3000})
      }
     
     }

     
 }
  