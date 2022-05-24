import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {MatDialog} from "@angular/material/dialog";

import {User} from "../../../models/User";
import {userSelector} from "../../../modules/user/store/selectors";
import {ProfileDialogComponent} from "../profile-dialog/profile-dialog.component";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private store$: Store,public dialog: MatDialog) { }

  user: User | null = null;
  user$: Observable<User | null> = this.store$.select(userSelector);
  userSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.userSubscription = this.user$.subscribe(user => this.user = user);
  }

  handleProfileButtonClick(){
    console.log(this.user);
    if(this.user){
      let dialogRef = this.dialog.open(ProfileDialogComponent, {data: this.user});
    }
    else{
      let dialogRef = this.dialog.open(LoginDialogComponent);
    }
  }

  ngOnDestroy(): void{
    this.userSubscription?.unsubscribe();
  }
}
