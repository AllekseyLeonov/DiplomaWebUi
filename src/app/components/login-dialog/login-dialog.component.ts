import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {login} from "../../../modules/user/store/actions";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  constructor(private store$: Store, public dialogRef: MatDialogRef<LoginDialogComponent>) { }

  login: string = "";
  password: string = "";

  ngOnInit(): void {
  }

  handleSubmitButtonClick(){
    this.store$.dispatch(login({login: this.login, password: this.password}));
    this.dialogRef.close();
  }
}
