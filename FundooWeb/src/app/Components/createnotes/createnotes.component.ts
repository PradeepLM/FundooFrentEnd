import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NotesService } from 'src/app/Service/notes.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Notes } from 'src/app/Model/notes.model';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
   
  constructor(private formBuilder:FormBuilder,private noteservice:NotesService,private router:Router,private matSnackBar:MatSnackBar) { }
  open: boolean = false;
  notes:Notes=new Notes();
  ngOnInit(): void {
  }
  titleFormControl=new FormControl('',[Validators.required]);
  descriptionFormControl=new FormControl('',[Validators.required]);

onopen(){
  this.open=true;
}
onCreateNote(){
  
  this.notes.title=this.titleFormControl.value;
  this.notes.description=this.descriptionFormControl.value;
  this.noteservice.createNotes(this.notes).subscribe(  
    (response:any) =>{
       this.matSnackBar.open(response.message, "succesfull", {duration:5000})
    },
    (error:any)=> {
      this.matSnackBar.open(error.error.message, "failed", {duration:5000})
    });
  }
}