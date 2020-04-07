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
  labels:Label;
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

  onClickCreateLabel(InputLabel){
    console.log(InputLabel,"label input");
    let label={
      "labelName":InputLabel
    }
      this.labelService.createLabel(label).subscribe((response)=>{
        console.log(response);
        this.matSnackBar.open("Label Created","Ok",{duration:3000});
      });
  }

  onClickDeleteLabel(label){
    console.log(label);
    
    this.labelService.deleteLabel(label).subscribe((response)=>{
      console.log(response);
      this.matSnackBar.open("Label Deleted","Ok",{duration:3000});
    });
  }


}
