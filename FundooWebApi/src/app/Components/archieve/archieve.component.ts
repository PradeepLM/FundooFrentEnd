import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/Model/notes.model';
import { GetnotesService } from 'src/app/Service/getnotes.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  archievednotes:Notes[]
  note:Notes=new Notes()
  constructor(private getNote:GetnotesService) { }

  ngOnInit(): void {
    this.archievednotes=this.getNote.getarchieveNotesList()
    console.log(this.archievednotes);
    
  }

}
