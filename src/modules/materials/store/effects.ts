import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";

import {getRequest, getRequestError, getRequestSuccess} from "./actions";
import MaterialService from "../services/MaterialService";

@Injectable()
export class materialsEffects {
  constructor(private materialService: MaterialService, private actions$: Actions) {}

  getMaterialRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(getRequest), switchMap(action => {
          return this.materialService.getMaterials$().pipe(
            map(result => {
              console.log("eff", result)
              return getRequestSuccess({material: result})
            }),
            catchError(error => of(getRequestError({error})))
          )
        }
      ));
    }
  )
}

