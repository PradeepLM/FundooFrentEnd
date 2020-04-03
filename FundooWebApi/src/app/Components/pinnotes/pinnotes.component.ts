import { Component, OnInit, Input } from '@angular/core';
import { Notes } from 'src/app/Model/notes.model';
import { NotesService } from 'src/app/Service/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pinnotes',
  templateUrl: './pinnotes.component.html',
  styleUrls: ['./pinnotes.component.scss']
})
export class PinnotesComponent implements OnInit {
  [x: string]: any;
 @Input() note: Notes;
  isPinned: boolean;
  Token=localStorage.getItem('token');
  constructor(private noteservice:NotesService,private matsnacakBar:MatSnackBar) { }
  ngOnInit(): void {
  }


  pinnedNote() {
    console.log(this.note.id);
       this.noteservice.pinNote(this.note.id).subscribe(response => {
      if (this.note.isPinned) {
        this.isPinned = false;
        this.matsnacakBar.open("Note unPinned Successfully", 'Ok', { duration: 3000 }); 
      }
      else if (!this.note.isPinned) {
        this.isPinned = true;
        this.matsnacakBar.open("Note Pinned Successfully", 'Ok', { duration:3000 });
      }
  },
      (error: any) => {
        console.log("error");
      });
  } 

}
