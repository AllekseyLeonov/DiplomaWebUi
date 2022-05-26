import {createReducer, on} from "@ngrx/store";

import {
  getRequestSuccess,
} from "./actions";
import {initialState} from "./state";

export const materialsReducer = createReducer(
  initialState,
  on(getRequestSuccess, (state, action) => {
    return ({...state, dialogs: action.dialogs})
  }),
)
