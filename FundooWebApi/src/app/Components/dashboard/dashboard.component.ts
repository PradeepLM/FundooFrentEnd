import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/Service/notes.service';
import { Notes } from 'src/app/Model/notes.model';
import { GetnotesService } from 'src/app/Service/getnotes.service';


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

  constructor(private router:Router,private getNote:GetnotesService) { }

  ngOnInit(): void {
  }
  signout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  searchNote() {
    console.log('wawawawa');
    this.getNote.setSearchNoteData(this.title);
  }

  getlabels(){
    this.labelService.getAlllabel().subscribe((data) => {
        console.log(data.labels)
        this.labels = data.labels;
        console.log(this.labels)
    })
  }


}
