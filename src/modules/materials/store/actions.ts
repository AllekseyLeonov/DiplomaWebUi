import {createAction, props} from "@ngrx/store";
import {Material} from "../../../models/Material";

const materialsKey = "[MATERIALS]";

export const getRequest = createAction(materialsKey + "getRequest");
export const getRequestSuccess = createAction(materialsKey + "getRequestSuccess", props<{material: Material}>());
export const getRequestError = createAction(materialsKey + "getRequestError", props<{error:string}>());
