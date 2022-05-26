import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap, takeLast} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action, select, Store} from "@ngrx/store";

import {
  addMessage, addMessageSuccess,
  getByIdRequest,
  getByIdRequestError,
  getByIdRequestSuccess,
  getRequest,
  getRequestError,
  getRequestSuccess,
} from "./actions";
import DialogService from "../services/DialogService";
import {AddMessageRequest} from "../../../models/Dialog";

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

  getDialogByIdRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(getByIdRequest), switchMap(action => {
          return this.dialogService.getDialogById$(action.id).pipe(
            map(result => {
              return getByIdRequestSuccess({dialog: result})
            }),
            catchError(error => of(getByIdRequestError({error})))
          )
        }
      ));
    }
  )

  addMessageEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(addMessage), switchMap(action => {
        const request: AddMessageRequest = {
          dialogId: action.message.dialogId,
          senderId: action.message.sender.id,
          text: action.message.text
        }
          return this.dialogService.addMessage$(request).pipe(
            map(result => {
              return addMessageSuccess()
            })
          )
        }
      ));
    }
  )
}

