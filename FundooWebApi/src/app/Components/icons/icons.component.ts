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
  //isArchieved: boolean = false;
  constructor(private noteService:NotesService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  public archiveButton(){
    this.noteService.archieveNote(this.note).subscribe((response:any)=>{      
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


  setColor(color){
    this.noteService.colorNote(this.note.id,color).subscribe((response:any)=>{
      this.snackBar.open("color changed", "OK"),{duration:4000}
    })
  }
  

  arrayOfColors = [
    [
      { color: "rgb(255, 179, 255)", name: "pink" },
      { color: "rgb(255, 255, 128)", name: "darkGolden" },
      { color: "rgb(255, 153, 0)", name: "orange" },
      { color: "rgb(200, 232, 104)", name: "yellow" },
    ],
    [
      { color: "rgb(97, 191, 82)", name: "green" },
      {color:"rgb(185, 247, 238)",name:"teal"},
      { color: "rgb(153, 221, 255)", name: "light blue" },
      { color: "darkblue", name: "darkblue" },
    ],
    [
      { color: "purple", name: "purple" },
      { color: "red", name: "red" },
      { color: " brown", name: "brown" },
      { color: "slategray", name: "grey" },
    ]
  ]
}




