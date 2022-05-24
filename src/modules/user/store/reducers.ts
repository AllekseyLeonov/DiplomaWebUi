import {createReducer, on} from "@ngrx/store";

import {getRequestError, getRequestSuccess} from "./actions";
import {initialState} from "./state";

export const materialsReducer = createReducer(
  initialState,
  on(getRequestSuccess, (state, action) => {
    return ({...state, user: action.user})
  }),
)
