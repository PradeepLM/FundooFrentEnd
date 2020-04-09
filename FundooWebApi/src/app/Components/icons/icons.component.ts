import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/Service/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Notes } from 'src/app/Model/notes.model';
import { MatDialog } from '@angular/material/dialog';
import { LabelService } from 'src/app/Service/label.service';
import { LabelComponent } from '../label/label.component';
import { ReminderComponent } from '../reminder/reminder.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() note: Notes=new Notes();
  public selectedTime: string
  id: number;
  isArchieved: boolean = false;
  constructor(private noteService:NotesService,private snackBar:MatSnackBar,private dialog: MatDialog, private labelService: LabelService) { }

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
    console.log(this.note,'coloer-s-s--s-');
    
    this.noteService.colorNote(this.note,color).subscribe((response:any)=>{
      console.log('dmdmdmdmdm');
      
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

  openDialog(note): void {
    console.log("note Id:" + note.id);
    const dialogRef = this.dialog.open(LabelComponent, {
      width: '250px',
      height: 'auto',
      data: { note }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onClickDelete() {
    this.noteService.deleteNote(this.note).subscribe((response) => {
      this.snackBar.open("Note trashed", 'ok', { duration: 5000 });
    },
      error => {
        this.snackBar.open("error in Note Deletion", 'ok', { duration: 5000 });
      }
    );
  }





  today( noteId) {
    window.location.reload();
        this.noteService.reminder(noteId, this.note, "Today, 8:00PM").subscribe( () => {
return this.snackBar.open("Successfully Reminder Added..", "", {duration:3000});
        },
        () => {
return this.snackBar.open("Failed to Add Reminder..", "", {duration:3000});
        });
}

tomorrow( noteId) {
  window.location.reload();
      this.noteService.reminder(noteId, this.note, "Tomorrow, 8:00AM").subscribe( () => {
return this.snackBar.open("Successfully Reminder Added..", "", {duration:3000});
      },
      () => {
return this.snackBar.open("Failed to Add Reminder..", "", {duration:3000});
      });
  }

  nextweek( noteId) {
    var d = new Date();
    var month = d. getMonth();
    mon : String;
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
   
    window.location.reload();
    console.log("naveen"+month);
    this.noteService.reminder(noteId, this.note,   monthNames[d.getMonth()] +" 13, 8:00AM").subscribe( () => {
    return this.snackBar.open("Successfully Reminder Added..", "", {duration:3000});
      },
      () => {
return this.snackBar.open("Failed to Add Reminder..", "", {duration:3000});
      });
  }
  pickdate( notes) {
    console.log("data :::" + notes);
  this.dialog.open(ReminderComponent, {
    data : { notes : notes },
    panelClass: 'custom-dialog-container'
  });
  
  }
   
  back() {
    window.location.reload();
  }
  
}




