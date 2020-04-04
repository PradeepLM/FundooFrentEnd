import { Component, OnInit, Inject } from '@angular/core';
import { NotesService } from 'src/app/Service/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Notes } from 'src/app/Model/notes.model';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  note:Notes;
  constructor(public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private noteService:NotesService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.dialogRef.close();
    this.noteService.updateNote(this.note).subscribe((response)=>{
        this.snackbar.open("Note Updated SuccessFully","ok",{duration:5000});
    },
    (error:any)=>{
      this.snackbar.open("Failed","ok",{duration:5000});
    });
  }
}
