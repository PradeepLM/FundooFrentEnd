import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private router : Router, private snakbar : MatSnackBar) { }

  ngOnInit(): void {
  }
  SignOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    return this.snakbar.open("Successfully Sign Out", "", {duration : 3000});
  }

}
