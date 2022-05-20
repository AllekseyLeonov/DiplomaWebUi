import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";

import {Practice} from "../../../../models/Practice";
import {addConsoleMessage, checkCodeRequest, getRequest} from "../../store/actions";
import {Observable} from "rxjs";
import {consoleMessagesSelector, practiceSelector} from "../../store/selectors";
import PracticeService from "../../services/PracticeService";

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private service: PracticeService,
  ) { }

  practice: Practice | null = null;
  practice$: Observable<Practice | null> = this.store.select(practiceSelector);

  innerCode: string = "";
  consoleMessages: string[] = [];
  consoleMessages$: Observable<string[]> = this.store.select(consoleMessagesSelector);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(getRequest({id}));
    });
    this.practice$.subscribe(practice => {
      this.practice = practice;
    });
    this.consoleMessages$.subscribe(messages =>
      this.consoleMessages = messages,
    )
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
}
