import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/Service/notes.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();
  title: String;
  description: String;

  constructor(private router:Router,private noteService:NotesService) { }

  ngOnInit(): void {
  }
  signout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  searchNote() {
    console.log();
    this.noteService.setSearchNoteData(this.title);
  }


}
