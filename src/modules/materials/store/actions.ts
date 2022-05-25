import {createAction, props} from "@ngrx/store";
import {Material, MaterialPreview} from "../../../models/Material";

const materialsKey = "[MATERIALS]";

export const getRequest = createAction(materialsKey + "getRequest");
export const getRequestSuccess = createAction(materialsKey + "getRequestSuccess", props<{material: Material}>());
export const getRequestError = createAction(materialsKey + "getRequestError", props<{error:string}>());

export const setMaterialPreview =
  createAction(materialsKey+"setMaterialPreview", props<{materialPreview: MaterialPreview}>());
export const setMaterials =
  createAction(materialsKey+"setMaterials", props<{materials: Material}>());
export const setCompletedMaterials =
  createAction(materialsKey+"setCompletedMaterials", props<{materials: string[]}>());

export const getAvailableMaterialsRequest = createAction(materialsKey + "getAvailableMaterialsRequest", props<{userId: string}>());
export const getAvailableMaterialsSuccess = createAction(materialsKey + "getAvailableMaterialsSuccess", props<{materials: string[]}>());
export const getAvailableMaterialsError = createAction(materialsKey + "getAvailableMaterialsError", props<{error:string}>());
