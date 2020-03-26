import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { NotesService } from 'src/app/Service/notes.service';
import { Notes } from 'src/app/Model/notes.model';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  note:Notes=new Notes();
  notes:Notes[];
  getallNotes:[];
  constructor(private formBuilder: FormBuilder,  private noteservice: NotesService, private matSnackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.displayNotes();
  }
 public displayNotes(){
    this.noteservice.getAllNote().subscribe((Response:any)=>{
      this.notes=Response.note;
    })
  }

}
