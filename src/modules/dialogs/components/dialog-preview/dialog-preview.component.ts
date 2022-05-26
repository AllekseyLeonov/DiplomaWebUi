import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Dialog} from "../../../../models/Dialog";
import {User} from "../../../../models/User";
import {Observable, Subscription} from "rxjs";
import {userSelector} from "../../../user/store/selectors";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-dialogs-preview',
  templateUrl: './dialog-preview.component.html',
  styleUrls: ['./dialog-preview.component.css']
})
export class DialogPreviewComponent implements OnInit, OnDestroy {

  constructor(private store$: Store) {
  }

  @Input() dialog: Dialog | null = null;

  user: User | null = null;
  user$: Observable<User | null> = this.store$.select(userSelector);
  userSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.userSubscription = this.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userSubscription?.unsubscribe();
  }
}
