import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";

import {
  addMessage, addMessageSuccess,
  checkCodeRequest,
  checkCodeRequestSuccess, confirmCompleted, confirmCompletedSuccess,
  getRequest,
  getRequestError,
  getRequestSuccess
} from "./actions";
import PracticeService from "../services/PracticeService";
import {loginSuccess} from "../../user/store/actions";
import {getAvailableMaterialsRequest} from "../../materials/store/actions";

@Injectable()
export class practiceEffects {
  constructor(private practiceService: PracticeService, private actions$: Actions) {}

  getPracticeRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(getRequest), switchMap(action => {
        return this.practiceService.getPractice$(action.id).pipe(
            map(result => {
              return getRequestSuccess({practice: result})
            }),
            catchError(error => of(getRequestError({error})))
          )
        }
      ));
    }
  )

  checkCodeRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(checkCodeRequest), switchMap(action => {
          return this.practiceService.checkCode(action.data).pipe(
            map(result => {
              return checkCodeRequestSuccess({response: result})
            }),
            catchError(error => of(getRequestError({error})))
          )
        }
      ));
    }
  )

  addMessageEffect: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(addMessage), switchMap(action => {
          return this.practiceService.addMessageFromPractice$(action.message).pipe(
            map(result => {
              return addMessageSuccess();
            }),
          )
        }
      ));
    }
  )

  confirmCompletedEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(confirmCompleted), switchMap(action => {
        return this.practiceService.confirmCompleted$(action.userId, action.practiceId).pipe(
          map(result => {
            return confirmCompletedSuccess();
          }),
        )
        }
      ));
    }
  )
}

