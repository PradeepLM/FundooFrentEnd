import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { NotesComponent } from './Components/notes/notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { PinnotesComponent } from './Components/pinnotes/pinnotes.component';
import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';
import { EditlabelComponent } from './Components/editlabel/editlabel.component';


const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'',component:NotesComponent},
    {path:'notes',component:NotesComponent},
  {path:'createnotes',component:CreatenotesComponent},
  {path:'displaynotes',component:DisplaynotesComponent},
  {path:'pinnotes',component:PinnotesComponent},
  {path:'icons',component:IconsComponent},
  {path:'updatenote',component:UpdatenoteComponent},
  {path:'editlabel',component:EditlabelComponent}
 
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[LoginComponent,RegistrationComponent,ForgotpasswordComponent] 