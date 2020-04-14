import { Injectable } from '@angular/core';
import { Notes } from '../Model/notes.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetnotesService {
  notes:Notes[]
  pinNoteList:Notes[]
  archievenotes:Notes[]
  trashednotes:Notes[]
  remindernotes:Notes[]
  labelnotes:Notes[]
  private searchNoteData=new Subject<any>();
  constructor() { }

  setNotesList(message: Notes[]) {
    this.notes=message
  }

  getNotesList(){ 
    return this.notes
  }
  setPinNotesList(message: Notes[]) {
    this.pinNoteList=message
  }
  getPinNotesList() {
   return this.pinNoteList
  }
  setarchieveNotesList(message: Notes[]) {
    this.archievenotes=message
  }
  getarchieveNotesList() {
   return this.archievenotes
  }
  setaTrashedNotesList(message: Notes[]) {
    this.trashednotes=message
  }
  getTrashedNotesList() {
   return this.trashednotes
  }

  setReminderNoteList(message: Notes[]) {
    this.remindernotes=message
  }
  getreminderNotesList() {
    console.log('reminder');
    
   return this.remindernotes
  }
  setSearchNoteData(message:any){
    return this.searchNoteData.next({notes:message});
  }

  getSearchNoteData():Observable<any>{
    return this.searchNoteData.asObservable();
  }





  setlabelNotes(message: Notes[]) {
    this.labelnotes=message

  }

  getlabelNotes() {
   return this.labelnotes
  }
}

