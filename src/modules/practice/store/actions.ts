import {createAction, props} from "@ngrx/store";

import {CheckCodeRequest, CheckCodeResponse, Practice} from "../../../models/Practice";

const practiceKey = "[PRACTICE]";

export const getRequest = createAction(practiceKey + "getRequest", props<{id: string}>());
export const getRequestSuccess = createAction(practiceKey + "getRequestSuccess", props<{practice: Practice}>());
export const getRequestError = createAction(practiceKey + "getRequestError", props<{error:string}>());

export const checkCodeRequest = createAction(practiceKey + "checkCodeRequest", props<{data: CheckCodeRequest}>());
export const checkCodeRequestSuccess = createAction(practiceKey + "checkCodeRequestSuccess", props<{response: CheckCodeResponse}>());
export const addConsoleMessage = createAction(practiceKey + "addConsoleMessage", props<{message: string}>());
