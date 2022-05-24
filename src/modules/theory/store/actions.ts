import {createAction, props} from "@ngrx/store";

import {Theory} from "../../../models/Theory";

const theoryKey = "[THEORY]";

export const getRequest = createAction(theoryKey + "getRequest", props<{id: string}>());
export const getRequestSuccess = createAction(theoryKey + "getRequestSuccess", props<{theory: Theory}>());
export const getRequestError = createAction(theoryKey + "getRequestError", props<{error:string}>());
