import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dialog, Message} from "../../../../models/Dialog";
import {Observable, Subscription} from "rxjs";
import {dialogsSelector, selectedDialogSelector} from "../../store/selectors";
import {User} from "../../../../models/User";
import {userSelector} from "../../../user/store/selectors";
import {Store} from "@ngrx/store";
import {addMessage, getByIdRequest, getRequest} from "../../store/actions";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnDestroy {

  constructor(private store$: Store, private activatedRoute: ActivatedRoute) {
  }

  dialog: Dialog | null = null;
  dialog$: Observable<Dialog | null> = this.store$.select(selectedDialogSelector);
  dialogSubscription: Subscription | undefined;

  user: User | null = null;
  user$: Observable<User | null> = this.store$.select(userSelector);
  userSubscription: Subscription | undefined;

  routeSubscription: Subscription | undefined;

  newMessageText: string = '';

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.store$.dispatch(getByIdRequest({id}));
    });
    this.userSubscription = this.user$.subscribe(user => {
      this.user = user;
    });
    this.dialogSubscription = this.dialog$.subscribe(dialog => {
      this.dialog = dialog;
    });
  }

  getContainerClass(message: Message): string {
    if (message.sender.id == this.user?.id) return 'user-container';
    else return '';
  }

  sendMessage(): void {
    if (this.newMessageText.length == 0) return;
    const message: Message = {
      dateTime: new Date,
      dialogId: this.dialog!.id,
      sender: this.user!,
      text: this.newMessageText
    }
    this.newMessageText = '';
    this.store$.dispatch(addMessage({message}));
  }

  ngOnDestroy() {
    this.dialogSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
  }
}
