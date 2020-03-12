import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';


const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
