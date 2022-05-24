import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Store} from "@ngrx/store";

import {User} from "../../../models/User";
import {setUserData} from "../../../modules/user/store/actions";

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    public dialogRef: MatDialogRef<ProfileDialogComponent>,
    private store$: Store,
  ) { }

  ngOnInit(): void {
  }

  handleLogoutButtonClick(): void{
    this.store$.dispatch(setUserData({user: null}))
    this.dialogRef.close();
  }
}
