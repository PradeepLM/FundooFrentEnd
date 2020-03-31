import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  [x: string]: any;
  note:Notes=new Notes();
  notes:Notes[];
  getallNotes:[];
  pinnotes: Notes[];
  unpinnotes:Notes[];
  trash:boolean=false;
  archieve:boolean=false;
  constructor(private formBuilder: FormBuilder,  private noteservice: NotesService, private matSnackBar: MatSnackBar, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.param = params['page'] || '';
      if (this.param == "archive") {    
        this.getArchieveNote();
      }
      else  if (this.param == "trash") {
          this.getTrashNote();
      }
      else{
      this.displayNotes();
      }
    });
  }
  
 public displayNotes(){
  this.trash=false;
  this.archieve=false;
  this.notes = this.Notes.getNotesList()
  console.log(this.notes);
  
  this.pinnotes = this.Notes.getPinNotesList()
  }

 public getTrashNote(){
    this.trash=true;
    this.archieve=false;
    this.notes=this.Notes.getTrashedNotesList()
  }

 public getArchieveNote(){
    this.trash=false;
    this.archieve=true;
    this.notes=this.Notes.getarchieveNotesList()
  }

}
