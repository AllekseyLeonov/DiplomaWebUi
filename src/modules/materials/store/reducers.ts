import {createReducer, on} from "@ngrx/store";

import {getRequest, getRequestError, getRequestSuccess, setMaterialPreview} from "./actions";
import {initialState} from "./state";

export const materialsReducer = createReducer(
  initialState,
  on(getRequest, (state) => {
    return ({...state, isLoadingForMaterial: true})
  }),
  on(getRequestSuccess, (state, action) => {
    console.log({...state, isLoadingForMaterial: false, materials: action.material})
    return ({...state, isLoadingForMaterial: false, materials: action.material})
  }),
  on(getRequestError, (state, action) => ({...state, isLoadingForMaterial: false, error: action.error})),
  on(setMaterialPreview, (state, action) => ({...state, selectedMaterial: action.materialPreview}))
)
