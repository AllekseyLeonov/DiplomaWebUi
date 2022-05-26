import {createAction, props} from "@ngrx/store";
import {Dialog} from "../../../models/Dialog";

const dialogsKey = "[DIALOGS]";

export const getRequest = createAction(dialogsKey + "getRequest", props<{userId: string}>());
export const getRequestSuccess = createAction(dialogsKey + "getRequestSuccess", props<{dialogs: Dialog[]}>());
export const getRequestError = createAction(dialogsKey + "getRequestError", props<{error:string}>());
