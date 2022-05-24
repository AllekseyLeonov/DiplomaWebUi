import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";

import {getRequest, getRequestError, getRequestSuccess, setCompletedMaterials, setMaterials} from "./actions";
import MaterialService from "../services/MaterialService";

@Injectable()
export class materialsEffects {
  constructor(
    private materialService: MaterialService,
    private actions$: Actions,
    private store$: Store) {}

  getMaterialRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(ofType(getRequest), switchMap(action => {
          return this.materialService.getMaterials$().pipe(
            map(result => {
              return getRequestSuccess({material: result})
            }),
            catchError(error => of(getRequestError({error})))
          )
        }
      ));
    }
  )

  getMaterialRequestSuccessEffect$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(ofType(getRequestSuccess), switchMap(action => {
        console.log("here3");
        return this.materialService.getAvailableMaterials$("00000000-0000-0000-0000-000000000001").pipe(
            map(result => {
              return setCompletedMaterials({materials: result});
            }),
            catchError(error => of(getRequestError({error})))
          )
        }
      ));
    }
  )
}

