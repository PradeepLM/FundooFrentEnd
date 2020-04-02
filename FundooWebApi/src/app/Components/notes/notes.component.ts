import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/Model/notes.model';
import { NotesService } from 'src/app/Service/notes.service';
import { GetnotesService } from 'src/app/Service/getnotes.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private noteService:NotesService,private getNotes:GetnotesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.queryParams.subscribe(params => {
      this.param = params['page'] || '';
      if (this.param == "archive") {
        this.getArchieveNote();
      } 
      else  if(this.param == "trash") {
        this.getTrashNote();
      }
      else{
      this.displayNotes();
      }
    });
  }

  setnotes() {
    this.getNotes.setNotesList(this.notes);
  }

  setpinnotes() {
    this.getNotes.setPinNotesList(this.pinnotes);
  }

  setarchievenotes(){
    this.getNotes.setarchieveNotesList(this.archievenotes);
  }

  setTrashednotes(){
    this.getNotes.setaTrashedNotesList(this.trashednotes);
  }

  
  public displayNotes(){
    this.trash=true;
    this.noteService.getAllNote().subscribe((response:any)=>{
      this.notes=response.list;
      this.setnotes();
    })
    this.noteService.getPinnedAllNote().subscribe((data)=>{
      this.pinnotes=data.list;
      this.setpinnotes();
    })
  }

  public getArchieveNote(){
    this.trash=false;
    this.noteService.getArchieveNote().subscribe(
      (response:any) => {
        this.archievenotes = response.list;
        console.log(response.list);
        console.log(this.archievenotes);
        this.setarchievenotes();
    })  
  }

  public getTrashNote(){
    this.trash=false;
    console.log('thre',this.trash);
    this.noteService.getTrashedNote().subscribe(
      (response:any) => {
        console.log('ALL THE BEST');
        this.trashednotes = response.list;
        console.log(response.list);
        this.setTrashednotes();
    })
  }

}
