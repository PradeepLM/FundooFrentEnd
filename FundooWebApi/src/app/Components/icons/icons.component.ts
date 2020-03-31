import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/Service/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Notes } from 'src/app/Model/notes.model';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() note: Notes;
  id: number;
  isArchieved: boolean = false;
  constructor(private noteservice:NotesService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  // archieveNote(){
  //   console.log('id---',this.note.id); 
  //       this.noteservice.getPinnedAllNote(this.note).subscribe((response) => {
  //       if (this.note.isArchieved == true) {  
  //         this.snackBar.open("UnArchived", "OK", { duration: 5000 });
  //       }
  //       if (this.note.isPinned = true) {
  //         this.snackBar.open("Note unpinned and Archived", "OK", { duration: 5000 });
  //       }
  //       else {
  //         this.snackBar.open("Note Archived", "OK", { duration: 5000 });
  //       }
  //     },
  //       error => {
  //         this.snackBar.open("error in Note archieve operation", "OK", { duration: 5000 });
  //       });
  //   }
}
