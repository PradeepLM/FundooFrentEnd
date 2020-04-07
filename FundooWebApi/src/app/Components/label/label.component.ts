import { Component, OnInit, Inject } from '@angular/core';
import { Label } from 'src/app/Model/label.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelService } from 'src/app/Service/label.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Notedata } from 'src/app/Model/notedata.model';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  labels: Label;
  notes: Notedata[];
  noteId: number;
  labelId;
  name:string="";

  constructor(public dialogRef: MatDialogRef<LabelComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private labelService: LabelService, private matSnackBar: MatSnackBar) { 
    this.noteId=data.note.id;
    this.getAllUserLabel();
  }

  ngOnInit(): void {
    this.labelService.autoRefresh$.subscribe(()=>{
      this.getAllUserLabel();
    })
  }
  getAllUserLabel() {
    this.labelService.getAlllabel().subscribe((response) => {
      console.log("label list", response);
      this.labels = response.list;
      this.setLabelList();
    });
  }


  onCheckedAddLabel(labelId, noteId) {
    console.log("mat on checked label called");
    this.labelService.addLabel(this.noteId, labelId).subscribe((data) => {
      this.matSnackBar.open(data.response, "Ok", { duration: 3000 });
    },
      (error) => {
        this.matSnackBar.open("error", "Ok", { duration: 3000 });
      });
  }
  
  setLabelList() {
    this.labelService.setLabelList(this.labels);
  }

}
