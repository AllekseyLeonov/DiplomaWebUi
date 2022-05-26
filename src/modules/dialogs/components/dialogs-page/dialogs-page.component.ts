import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Dialog} from "../../../../models/Dialog";
import {Observable, Subscription} from "rxjs";
import {dialogsSelector} from "../../store/selectors";
import {getRequest} from "../../store/actions";
import {userSelector} from "../../../user/store/selectors";
import {User} from "../../../../models/User";

@Component({
  selector: 'app-dialogs-page',
  templateUrl: './dialogs-page.component.html',
  styleUrls: ['./dialogs-page.component.css']
})
export class DialogsPageComponent implements OnInit, OnDestroy {

  constructor(private store$: Store) {}

  dialogs: Dialog[] = [];
  dialogs$: Observable<Dialog[]> = this.store$.select(dialogsSelector);
  dialogsSubscription: Subscription | undefined;

  user: User | null = null;
  user$: Observable<User | null> = this.store$.select(userSelector);
  userSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.userSubscription = this.user$.subscribe(user => {
      this.user = user;
      if(user){
        this.store$.dispatch(getRequest({userId: user.id}));
      }
    });
    this.dialogsSubscription = this.dialogs$.subscribe(dialogs => {
      this.dialogs = dialogs;
    });
  }

  ngOnDestroy() {
    this.dialogsSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
  }
}
