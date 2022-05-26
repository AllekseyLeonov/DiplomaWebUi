import {createReducer, on} from "@ngrx/store";

import {createAccountSuccess, loginSuccess, setUserData} from "./actions";
import {initialState} from "./state";
import {setAvailableMaterials} from "../../materials/store/actions";

export const userReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    if(action.response.isSucceed){
      const jsonData = JSON.stringify(action.response.user);
      localStorage.setItem('diploma-user', jsonData);
      return ({...state, user: action.response.user})
    }
    return ({...state })
  }),
  on(createAccountSuccess, (state, action) => {
    if(action.response.isSucceed){
      const jsonData = JSON.stringify(action.response.user);
      localStorage.setItem('diploma-user', jsonData);
      return ({...state, user: action.response.user})
    }
    return ({...state })
  }),
  on(setUserData, (state, action) => {
    const jsonData = JSON.stringify(action.user);
    localStorage.setItem('diploma-user', jsonData);
    return ({...state, user: action.user })
  })
)
