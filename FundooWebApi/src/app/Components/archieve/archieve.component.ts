import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/Model/notes.model';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  archievednotes:Notes[]
  note:Notes=new Notes()
  constructor() { }

  ngOnInit(): void {
    this.archievednotes=this.g.getarchieveNotesList()
  }

}
