import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";

import {getRequest, getRequestError, getRequestSuccess} from "./actions";
import TheoryService from "../services/TheoryService";

@Injectable()
export class theoryEffects {
  constructor(private theoryService: TheoryService, private actions$: Actions) {}

  getTheoryContentRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(getRequest), switchMap(action => {
        return this.theoryService.getTheory$(action.id).pipe(
            map(result => {
              return getRequestSuccess({theory: result})
            }),
            catchError(error => {
              console.log(error)
              return of(getRequestError({error}))
            })
          )
        }
      ));
    }
  )
}

