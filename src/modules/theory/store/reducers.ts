import {createReducer, on} from "@ngrx/store";

import {getRequest, getRequestError, getRequestSuccess} from "./actions";
import {initialState} from "./state";

export const theoryReducer = createReducer(
  initialState,
  on(getRequest, (state) => {
    return ({...state, isLoadingForTheory: true})
  }),
  on(getRequestSuccess, (state, action) => {
    return ({...state, isLoadingForTheory: false, theory: action.theory})
  }),
  on(getRequestError, (state, action) =>
    ({...state, isLoadingForTheory: false, error: action.error, practice: null})
  ),
)
