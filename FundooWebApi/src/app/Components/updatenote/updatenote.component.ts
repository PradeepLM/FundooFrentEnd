import { Component, OnInit, Inject } from '@angular/core';
import { NotesService } from 'src/app/Service/notes.service';
import { Notes } from 'src/app/Model/notes.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  note:Notes;
  constructor(public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private noteService:NotesService,private snackbar:MatSnackBar) { 
      this.note=this.data.note;
    }

  ngOnInit(): void {
  }

  onSubmit(){
    this.dialogRef.close(this.note);
    this.noteService.updateNote(this.note).subscribe((response:any)=>{
        this.snackbar.open("Note Updated SuccessFully","ok",{duration:5000});
    },
    (error:any)=>{
      this.snackbar.open("Failed","ok",{duration:5000});
    });
  }
}
