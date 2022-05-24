import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {login} from "../../../modules/user/store/actions";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CreateAccountDialogComponent} from "../create-account-dialog/create-account-dialog.component";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  constructor(
    private store$: Store,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    public dialog: MatDialog,
  ) { }

  login: string = "";
  password: string = "";

  ngOnInit(): void {
  }

  handleSubmitButtonClick(){
    this.store$.dispatch(login({login: this.login, password: this.password}));
    this.dialogRef.close();
  }

  handleCreateAccountButtonClick(){
    this.dialog.open(CreateAccountDialogComponent);
    this.dialogRef.close();
  }
}
