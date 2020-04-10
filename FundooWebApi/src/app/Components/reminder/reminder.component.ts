import { Component, OnInit, Inject, Input } from '@angular/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter'





import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/Service/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { Notes } from 'src/app/Model/notes.model';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';  
const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
 

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})

export class ReminderComponent implements OnInit {
  date = new FormControl(moment());
  @Input() notes : Notes = new Notes();
    timing : String;
    dat : String;

  constructor( @Inject(MAT_DIALOG_DATA) public data : any, private noteService : NotesService, private matsnackbar : MatSnackBar) { }

  ngOnInit(): void {
    this.noteService.autoRefresh$.subscribe(response=>
      {
        this.timing;
      })
  }

  addreminder( noteId) {
    //this.dat = picker;
  window.location.reload();
  console.log(noteId,this.notes,this.timing);
          this.noteService.reminder(noteId, this.notes,", "+this.timing).subscribe( () => {
            
          return this.matsnackbar.open("Successfully Reminder Added..", "", {duration:3000});
          },
          () => {
            return this.matsnackbar.open("Failed to Add Reminder..", "", {duration:3000});
          });
      }
      time(da) {
        this.timing = da;
      }
  
  back() {
    window.location.reload();
  }
}
