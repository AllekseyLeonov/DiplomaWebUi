import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";

import {theoryContentSelector} from "../../store/selectors";
import {getRequest} from "../../store/actions";
import {Theory} from "../../../../models/Theory";

@Component({
  selector: 'app-theory-page',
  templateUrl: './theory-page.component.html',
  styleUrls: ['./theory-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TheoryPageComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) { }

  content: string = "<div></div>"
  theory$: Observable<Theory> = this.store.select(theoryContentSelector);

  routeSubscription: Subscription | undefined;
  theorySubscription: Subscription | undefined;

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(getRequest({id}));
    });
    this.routeSubscription = this.theory$.subscribe(theory => {
      this.content = theory.content;
    });
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
    this.theorySubscription?.unsubscribe();
  }

}
