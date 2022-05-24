import {createReducer, on} from "@ngrx/store";

import {loginSuccess, setUserData} from "./actions";
import {initialState} from "./state";

export const userReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    if(action.response.isSucceed){
      return ({...state, user: action.response.user})
    }
    return ({...state })
  }),
  on(setUserData, (state, action) => {
    return ({...state, user: action.user })
  })
)
