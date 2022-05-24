import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {theoryContentSelector} from "../../store/selectors";
import {getRequest} from "../../store/actions";
import {Theory} from "../../../../models/Theory";

@Component({
  selector: 'app-theory-page',
  templateUrl: './theory-page.component.html',
  styleUrls: ['./theory-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TheoryPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) { }

  content: string = "<div></div>"
  theory$: Observable<Theory> = this.store.select(theoryContentSelector);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(getRequest({id}));
    });
    this.theory$.subscribe(theory => {
      this.content = theory.content;
    });
  }

}
