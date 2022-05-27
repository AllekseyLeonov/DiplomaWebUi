import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";

import {Practice} from "../../../../models/Practice";
import {addConsoleMessage, checkCodeRequest, confirmCompleted, getRequest} from "../../store/actions";
import {Observable, Subscription} from "rxjs";
import {consoleMessagesSelector, isCompletedSelector, practiceSelector} from "../../store/selectors";
import PracticeService from "../../services/PracticeService";
import {MatDialog} from "@angular/material/dialog";
import {AddMessageDialogComponent} from "../add-message-dialog/add-message-dialog.component";
import {User} from "../../../../models/User";
import {userSelector} from "../../../user/store/selectors";

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    public dialog: MatDialog
  ) { }

  practice: Practice | null = null;
  practice$: Observable<Practice | null> = this.store.select(practiceSelector);

  innerCode: string = "";
  consoleMessages: string[] = [];
  consoleMessages$: Observable<string[]> = this.store.select(consoleMessagesSelector);

  routeSubscription: Subscription | undefined;
  practiceSubscription: Subscription | undefined;
  messagesSubscription: Subscription | undefined;
  userSubscription: Subscription | undefined;
  isCompletedSubscription: Subscription | undefined;
  user: User | null = null;
  user$: Observable<User|null> = this.store.select(userSelector);

  isCompleted: boolean = false;
  isCompleted$: Observable<boolean> = this.store.select(isCompletedSelector);

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(getRequest({id}));
    });
    this.practiceSubscription = this.practice$.subscribe(practice => {
      this.practice = practice;
    });
    this.messagesSubscription = this.consoleMessages$.subscribe(messages =>
      this.consoleMessages = messages,
    )
    this.userSubscription = this.user$.subscribe(user=>this.user = user);
    this.isCompletedSubscription = this.isCompleted$.subscribe(isCompleted => {
      this.isCompleted = isCompleted;
      if(this.isCompleted){
        console.log({user: this.user, practiceId: this.practice})
        this.store.dispatch(confirmCompleted({userId: this.user!.id, practiceId: this.practice!.id}));
      }
    });
  }

  handleInput($event: any) {
    this.innerCode = $event.target.innerText;
  }

  handleTestButtonClick(){
    if(!this.practice) return;

    this.store.dispatch(addConsoleMessage({message: "sending to server..."}));

    this.store.dispatch(checkCodeRequest({data: {
        innerCode: this.innerCode,
        outerCode: "",
        practiceId: this.practice.id,
      }}))
  }

  handleAskButtonClick() : void{
    this.dialog.open(AddMessageDialogComponent, {data: {userId: this.user?.id, moderatorId: this.practice?.moderatorId}});
  }

  getPracticeFirstPart() : string{
    if(this.practice){
      const innerString = "<inner>";
      const indexOfInner = this.practice.staticCode.indexOf(innerString);
      return this.practice.staticCode.slice(0, indexOfInner);
    }
    return "";
  }

  getPracticeSecondPart() : string{
    if(this.practice){
      const innerString = "<inner>";
      const outerString = "<outer>";
      const indexOfInner = this.practice.staticCode.indexOf(innerString);
      const indexOfOuter = this.practice.staticCode.indexOf(outerString);
      return this.practice.staticCode.slice(indexOfInner + innerString.length, indexOfOuter);
    }
    return "";
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
    this.practiceSubscription?.unsubscribe();
    this.messagesSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
    this.isCompletedSubscription?.unsubscribe();
  }
}
