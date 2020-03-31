import { Injectable } from '@angular/core';
import { Notes } from '../Model/notes.model';

@Injectable({
  providedIn: 'root'
})
export class GetnotesService {
  notes:Notes[]
  pinNoteList:Notes[]
  archievenotes:Notes[]
  trashednotes:Notes[]
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

}

