import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";
import {Store} from "@ngrx/store";
import {createAccount} from "../../../modules/user/store/actions";
import {CreateAccountRequest} from "../../../models/User";

@Component({
  selector: 'app-create-account-dialog',
  templateUrl: './create-account-dialog.component.html',
  styleUrls: ['./create-account-dialog.component.css']
})
export class CreateAccountDialogComponent implements OnInit {

  constructor(
    private store$: Store,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CreateAccountDialogComponent>,
  ) { }

  login: string = "";
  name: string = "";
  password: string = "";

  ngOnInit(): void {
  }

  handleLoginButtonClick(){
    this.dialog.open(LoginDialogComponent);
    this.dialogRef.close();
  }

  handleSubmitButtonClick(){
    const request: CreateAccountRequest = {
      login: this.login,
      name: this.name,
      password: this.password
    };

    this.store$.dispatch(createAccount({request}));
    this.dialogRef.close();
  }
}
