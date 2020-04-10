import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/Model/user.model';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  onenote: any;
  email: any;
  user:User=new User()
  collarr: any;  
  email1 = new FormControl();
  message:string;
  ToData: any[];

  constructor(private userService: UserService, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.onenote = this.data
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('emailUser');
  }
  writeEmail() {
    console.log(this.email1.value);
    let addColl = {
      "email ": this.email1.value
    }

    console.log("Add coll-->", addColl);
        this.userService.addCollaborator(this.onenote.noteId,this.email1.value).subscribe((res: any) => {




    })

  }

}
