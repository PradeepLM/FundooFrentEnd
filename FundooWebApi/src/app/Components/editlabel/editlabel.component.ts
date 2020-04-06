import { Component, OnInit, Inject } from '@angular/core';
import { Label } from 'src/app/Model/label.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelService } from 'src/app/Service/label.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editlabel',
  templateUrl: './editlabel.component.html',
  styleUrls: ['./editlabel.component.scss']
})
export class EditlabelComponent implements OnInit {
  labels:Label[];
  changeText: boolean;

  constructor(public dialogRef: MatDialogRef<EditlabelComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private labelService:LabelService,private matSnackBar:MatSnackBar) { 
    labelService.autoRefresh$.subscribe(()=>{
      this.labels=data.labels;
    });
    this.labels=data.labels;
    this.changeText=false;
  }

  ngOnInit(): void {
  }

 

}
