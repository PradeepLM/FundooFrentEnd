import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  //token:String;
  ngOnInit(): void {
    //this.token=this.router.snapshot.paramMap.get("token");
  }
  
  newPassword= new FormControl(null,[Validators.required,Validators.minLength(6)]);
  conformPassword= new FormControl(null,[Validators.required,Validators.minLength(6)]);



  errorPasswordMessage(){
    return this.newPassword.hasError('required')? "Enter Fields":
   this.newPassword.hasError('minlength')? "Enter Min len 6":
     "";
   }

   errorgetPasswordMessage(){
    return this.newPassword.hasError('required')? "Enter Fields":
   this.newPassword.hasError('minlength')? "Enter Min len 6":
     "";
   }

   onResetSubmit(){
     console.log('1',this.newPassword.value);
     console.log('2 ',this.conformPassword.value)
    if(this.newPassword.value===this.conformPassword.value){

    
     this.resetpassword.newPassword=this.newPassword.value;
     this.resetpassword.confirmPassword=this.conformPassword.value;

     
     this.userservice.resetPasswordUser(this.resetpassword).subscribe(  
      (response:any) =>{
        console.log("From backend ")
        this.router.navigate(["/login"]);
         this.matsnackbar.open("sucessfull", "ok", {duration:5000})
      },
      error=> {
        this.matsnackbar.open("failed", "", {duration:5000})
      });
    }
   }

}
