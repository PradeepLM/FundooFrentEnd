import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { NotesService } from 'src/app/Service/notes.service';
import { Notes } from 'src/app/Model/notes.model';
import { GetnotesService } from 'src/app/Service/getnotes.service';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewService } from 'src/app/Service/view.service';
import { Label } from 'src/app/Model/label.model';
import { LabelService } from 'src/app/Service/label.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  [x: string]: any;
  note: Notes= new Notes();
  open:boolean=false; 
  notes:Notes[];
  getallNotes:[];
  pinnotes: Notes[];
  unpinnotes:Notes[];
  label:Label=new Label();
  lab:boolean=false;
  trash:boolean=false;
  archieve:boolean=false;
  reminder:boolean=false;
  searchnote:any;
  searchNotes:boolean;
  direction:string="row";
  view: String;
  constructor(private formBuilder: FormBuilder,private noteService:NotesService,private viewservice:ViewService,  private getNotes:GetnotesService, private matSnackBar: MatSnackBar, private router: Router,private route:ActivatedRoute,private dialog: MatDialog,private labelService:LabelService) {  
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.param = params['page'] || '';
      if (this.param == "archive") {    
        this.getArchieveNote();
      }else  if (this.param == "trash") {
        this.getTrashNote();
      } else  if (this.param == "label") { 
        this.getlabelnotes();
      } else  if (this.param == "reminder") { 
        this.getReminder();
      }
      else{
      this.displayNotes();
      this.getViewd();
      }
    });
   
    this.getSearchNoteData();
  }
 public displayNotes(){
  this.lab=false
  this.trash=false;
  this.archieve=false;
  this.notes = this.getNotes.getNotesList();
  this.pinnotes = this.getNotes.getPinNotesList();
  
  
  }
  public getArchieveNote(){
    this.trash=false;
    this.archieve=true; 
    this.notes=this.getNotes.getarchieveNotesList();
    console.log(this.notes);
    
  }
  getTrashNote(){
    this.trash=true;
    this.archieve=false;
    this.notes=this.getNotes.getTrashedNotesList();
  }

  getReminder(){
    this.reminder=true;
    this.notes=this.getNotes.getreminderNotesList();
  }
  openDialog(note): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: 'auto',
      panelClass: 'custom-dialog-container',
      data: { note }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getSearchNoteData(){
    this.getNotes.getSearchNoteData().subscribe((message:any)=>{
      console.log("search data",message.notes);
        this.searchnote=message.notes;
        this.searchNotes=true;
        if(message.notes==""){
          this.searchNotes=false;
        }
    });   
  }
  getlabelnotes(){
    this.lab=true;
    this.notes=this.getNotes.getlabelNotes();
  }

  onClickDelete(id){
  }
  onClickRestore(id){
  }

  getViewd(){
    this.noteService.getView().subscribe(
      (response:any)=>{
               this.view=response.view;
           }
    );
    console.log('View ',this.view);
    
  }
  onDeleteRem(note){
    console.log(note);
    this.noteService.removeremainder(note).subscribe((response) => {
      console.log(response);
      this.matSnackBar.open("remainder added", 'ok', { duration: 5000 });
    },
      error => {
        this.C.open("error adding remainder", 'ok', { duration: 5000 });
      }
    );
  }

  removemapping(noteId,labelId){
    this.labelService.removemaping(labelId,noteId).subscribe((response)=>{
      this.matSnackBar.open("label unmapped", "Ok", { duration: 3000 });
    },

      (error) => {
        this.matSnackBar.open("error", "Ok", { duration: 3000 });
      });
  }





unpin(note:any){
  console.log(this.note.id)
  this.noteService.pinNote(this.note).subscribe(response => {
      this.matSnackBar.open("Note un Pinned Successfully", 'Ok', { duration:3000 });
    
})
}
}