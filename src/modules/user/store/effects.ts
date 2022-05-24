import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";

import {login, loginError, loginSuccess} from "./actions";
import UserService from "../services/UserService";

@Injectable()
export class userEffects {
  constructor(private userService: UserService, private actions$: Actions) {}

  getUserDataEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(login), switchMap(action => {
          return this.userService.login$(action.login, action.password).pipe(
            map(result => {
              return loginSuccess({response: result})
            }),
            catchError(error => of(loginError({error})))
          )
        }
      ));
    }
  )
}

