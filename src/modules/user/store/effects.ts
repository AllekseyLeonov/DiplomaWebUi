import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";

import {
  createAccount,
  createAccountError,
  createAccountSuccess,
  login,
  loginError,
  loginSuccess,
  setUserData
} from "./actions";
import UserService from "../services/UserService";
import {getAvailableMaterialsRequest, setAvailableMaterials} from "../../materials/store/actions";

@Injectable()
export class userEffects {
  constructor(private userService: UserService, private actions$: Actions) {
  }

  loginEffect$: Observable<Action> = createEffect(() => {
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

  loginSuccessEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(loginSuccess), map(loginInfo => {
          return getAvailableMaterialsRequest({userId: loginInfo.response.user?.id || ""})
        }
      ));
    }
  )

  setUserEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(setUserData), map(action => {
          if (action.user) {
            return getAvailableMaterialsRequest({userId: action.user.id})
          }
          else return setAvailableMaterials({materials: []});
        }
      ));
    }
  )

  createAccountEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(createAccount), switchMap(action => {
          return this.userService.createAccount$(action.request).pipe(
            map(result => {
              return createAccountSuccess({response: result})
            }),
            catchError(error => of(createAccountError({error})))
          )
        }
      ));
    }
  )

  createAccountSuccessEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(createAccountSuccess), map(loginInfo => {
          return getAvailableMaterialsRequest({userId: loginInfo.response.user?.id || ""})
        }
      ));
    }
  )
}

