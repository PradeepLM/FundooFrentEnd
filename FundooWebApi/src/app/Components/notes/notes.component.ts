import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/Model/notes.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  [x: string]: any;
  note: Notes = new Notes();
  open: boolean = false;
  notes:Notes[];
  getAllNotes: [];
  pinnotes: Notes[];
  unpinnotes:Notes[];
  archievenotes:Notes[];
  trashednotes:Notes[];
  trash:boolean=false;  

  constructor() { }

  ngOnInit(): void {
  }

}
