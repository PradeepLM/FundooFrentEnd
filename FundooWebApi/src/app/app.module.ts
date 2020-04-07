import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NotesComponent } from './Components/notes/notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { PinnotesComponent } from './Components/pinnotes/pinnotes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SearchnotePipe } from './pipe/searchnote.pipe';
import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';
import { EditlabelComponent } from './Components/editlabel/editlabel.component';
import { LabelComponent } from './Components/label/label.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CreatenotesComponent,
    DisplaynotesComponent,
    NotesComponent,
    IconsComponent,
    PinnotesComponent,
    SearchnotePipe,
    UpdatenoteComponent,
    EditlabelComponent,
    LabelComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatDialogModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTooltipModule
    
    
    
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
