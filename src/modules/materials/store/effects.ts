import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap, takeLast} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action, select, Store} from "@ngrx/store";

import {
  getAvailableMaterialsError,
  getAvailableMaterialsRequest, getAvailableMaterialsSuccess,
  getRequest,
  getRequestError,
  getRequestSuccess,
  setCompletedMaterials,
  setMaterials
} from "./actions";
import MaterialService from "../services/MaterialService";
import {userSelector} from "../../user/store/selectors";
import {User} from "../../../models/User";

@Injectable()
export class materialsEffects {
  constructor(
    private materialService: MaterialService,
    private actions$: Actions,
    private store$: Store) {
  }

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
      return this.actions$.pipe(
        ofType(getAvailableMaterialsRequest),
        switchMap(action => {
            return this.materialService.getAvailableMaterials$(action.userId).pipe(
              map(result => {
                return getAvailableMaterialsSuccess({materials: result});
              }),
              catchError(error => of(getAvailableMaterialsError({error})))
            )
          }
        ));
    }
  )
}

