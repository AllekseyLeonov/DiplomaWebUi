import {createReducer, on} from "@ngrx/store";

import {
  getAvailableMaterialsRequest, getAvailableMaterialsSuccess,
  getRequest,
  getRequestError,
  getRequestSuccess, setAvailableMaterials,
  setCompletedMaterials,
  setMaterialPreview,
  setMaterials
} from "./actions";
import {initialState} from "./state";

export const materialsReducer = createReducer(
  initialState,
  on(getRequest, (state) => {
    return ({...state, isLoadingForMaterial: true})
  }),
  on(getRequestSuccess, (state, action) => {
    return ({...state, isLoadingForMaterial: false, materials: action.material, selectedMaterial: action.material})
  }),
  on(getRequestError, (state, action) => ({...state, isLoadingForMaterial: false, error: action.error})),
  on(setMaterialPreview, (state, action) => ({...state, selectedMaterial: action.materialPreview})),
  on(setMaterials, (state, action) => ({...state, materials: action.materials})),
  on(setCompletedMaterials, (state, action) => {return {...state, completedMaterials: action.materials}}),
  on(getAvailableMaterialsSuccess, (state, action) => {
    return ({...state, completedMaterials: action.materials})
  }),
  on(setAvailableMaterials, (state, action) => {
    return ({...state, completedMaterials: action.materials })
  })
)
