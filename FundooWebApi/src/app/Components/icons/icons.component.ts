import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Service/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  isPinned:boolean;
  token=localStorage.getItem('token')
  constructor(private noteservice:NotesService,private snackBar:MatSnackBar,) { }

  ngOnInit(): void {
  }
  pinnedNote(){
  }
}
