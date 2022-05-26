import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap, takeLast} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action, select, Store} from "@ngrx/store";

import {
  getRequest,
  getRequestError,
  getRequestSuccess,
} from "./actions";
import DialogService from "../services/DialogService";

@Injectable()
export class dialogEffects {
  constructor(private dialogService: DialogService, private actions$: Actions) {}

  getDialogsRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(getRequest), switchMap(action => {
          return this.dialogService.getDialogs$(action.userId).pipe(
            map(result => {
              return getRequestSuccess({dialogs: result})
            }),
            catchError(error => of(getRequestError({error})))
          )
        }
      ));
    }
  )
}

