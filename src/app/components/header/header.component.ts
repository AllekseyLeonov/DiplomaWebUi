import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";

import {User} from "../../../models/User";
import {userSelector} from "../../../modules/user/store/selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private store$: Store) { }

  user: User | null = null;
  user$: Observable<User | null> = this.store$.select(userSelector);
  userSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.userSubscription = this.user$.subscribe(user => this.user = user);
  }

  handleProfileButtonClick(){

  }

  ngOnDestroy(): void{
    this.userSubscription?.unsubscribe();
  }
}
