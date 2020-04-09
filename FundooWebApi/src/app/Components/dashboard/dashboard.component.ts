import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/Service/notes.service';
import { Notes } from 'src/app/Model/notes.model';
import { GetnotesService } from 'src/app/Service/getnotes.service';
import { LabelService } from 'src/app/Service/label.service';
import { Label } from 'src/app/Model/label.model';
import { MatDialog } from '@angular/material/dialog';
import { EditlabelComponent } from '../editlabel/editlabel.component';
import { UserService } from 'src/app/Service/user.service';
import { User } from 'src/app/Model/user.model';
import { SignoutComponent } from '../signout/signout.component';
import { ReminderComponent } from '../reminder/reminder.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();
  listview : boolean = false;
  login = true;
  users : User = new User();
  getUser : User[];

  notes: Notes[];
  note : Notes = new Notes();
  title: String;
  description: String;
  labels: Label[];
   layout : String;
   labelnotes:Notes[];
  constructor(private userService:UserService,private noteService:NotesService, private router:Router,private getNote:GetnotesService,private labelService:LabelService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.noteService.autoRefresh$.subscribe( response => {
      this.signout();
      this.getlabels();
          });
          this.signout;
          this.getlabels();      
  }

  refresh() {
    window.location.reload();
  }
  
  signout(){
    localStorage.clear;
    this.router.navigate(['/login'])
  }

  onclicked() {
    console.log("this.layout = "+this.listview);
    if(this.listview == true) {
      this.listview = false;
    this.layout = 'row';
    }
    else if( this.listview == false) {
      this.listview = true;
      this.layout = 'column';
    }
  
    this.router.navigate(['/dashboard/pinnotes'], { queryParams : {page : 'pinunpin', data : this.layout } });
    this.router.navigate(['/dashboard/allreminders'], { queryParams : { data : this.layout}});
    this.router.navigate(['/dashboard/displaynotes'], { queryParams : {page : 'archive', data : this.layout} });
    this.router.navigate(['/dashboard/displaynotes'], { queryParams : {page : 'trash', data : this.layout} });
  
  }

 
 
  searchNote() {
    console.log('wawawawa');
    this.getNote.setSearchNoteData(this.title);
    console.log('hyhy');
  }

  getlabels(){
    this.labelService.getAlllabel().subscribe((response:any) => {
        this.labels = response.list;
    })
  }
  // onCLickSetLabelId(labelId) {
  //   console.log("dfdfdfd",labelId);
  //   this.labelService.getNotesByLabel(labelId).subscribe((data)=>{
  //         console.log(data);
          
  //   });
  // }
  openDialog(labels:Label[]): void {
    const dialogRef = this.dialog.open(EditlabelComponent, {
      width: '380px',
      height: 'auto',
      data: { labels }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  displaynotelabels(labelId){
    console.log(labelId,'labelnotes id');
    
    this.labelService.getlabelnotes(labelId).subscribe((data)=>{
      console.log(data,'resp');
      this.labelnotes=data.note;
      this.setlabelNotes();
    });
  }

  setlabelNotes(){

    this.getNote.setlabelNotes(this.labelnotes);

  }

}
