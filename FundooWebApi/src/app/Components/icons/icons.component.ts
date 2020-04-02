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
  constructor(private noteService:NotesService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  public archiveButton(){
    console.log('wewewewe',this.id);
    this.noteService.archieveNote(this.note).subscribe((response:any)=>{
      console.log(response);
      
      if(this.note.isArchieved==true){
        this.snackBar.open("unArchieve","OK",{duration:4000});
      }
     else if(this.note.isPinned==true){
        this.snackBar.open("Note Archieved and unpinned","OK",{duration:4000});
      }
      else{
        this.snackBar.open("Note Archived", "OK", { duration:4000});
      }
    },
    error => {
      this.snackBar.open("error in Note archieve operation", "OK", { duration: 400 });
    });
  }
}
