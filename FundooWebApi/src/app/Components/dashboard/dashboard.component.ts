import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/Service/notes.service';
import { Notes } from 'src/app/Model/notes.model';
import { GetnotesService } from 'src/app/Service/getnotes.service';
import { LabelService } from 'src/app/Service/label.service';
import { Label } from 'src/app/Model/label.model';
import { MatDialog } from '@angular/material/dialog';
import { EditlabelComponent } from '../editlabel/editlabel.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();
  notes: Notes[];
  title: String;
  description: String;
  labels: Label[];

  constructor(private router:Router,private getNote:GetnotesService,private labelService:LabelService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getlabels()      
  }
  signout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  searchNote() {
    console.log('wawawawa');
    this.getNote.setSearchNoteData(this.title);
    console.log('hyhy');
  }

  getlabels(){
    this.labelService.getAlllabel().subscribe((response:any) => {
        this.labels = response.list;
        console.log(response.label,'saaS'); 
    })
  }
  onCLickSetLabelId(labelId) {
    console.log("dfdfdfd",labelId);
    this.labelService.getNotesByLabel(labelId).subscribe((data)=>{
          console.log(data);
          
    });
  }
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
  


}
