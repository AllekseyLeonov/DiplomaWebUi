import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";

import {getRequest, getRequestError, getRequestSuccess} from "./actions";
import UserService from "../services/UserService";

@Injectable()
export class userEffects {
  constructor(private userService: UserService, private actions$: Actions) {}

  getUserDataEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(getRequest), switchMap(action => {
          return this.userService.getUserData$(action.id).pipe(
            map(result => {
              return getRequestSuccess({user: result})
            }),
            catchError(error => of(getRequestError({error})))
          )
        }
      ));
    }
  )
}

