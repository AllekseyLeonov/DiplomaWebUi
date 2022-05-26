import {createAction, props} from "@ngrx/store";
import {Dialog, Message} from "../../../models/Dialog";

const dialogsKey = "[DIALOGS]";

export const getRequest = createAction(dialogsKey + "getRequest", props<{userId: string}>());
export const getRequestSuccess = createAction(dialogsKey + "getRequestSuccess", props<{dialogs: Dialog[]}>());
export const getRequestError = createAction(dialogsKey + "getRequestError", props<{error:string}>());

export const getByIdRequest = createAction(dialogsKey + "getByIdRequest", props<{id: string}>());
export const getByIdRequestSuccess = createAction(dialogsKey + "getByIdRequestSuccess", props<{dialog: Dialog}>());
export const getByIdRequestError = createAction(dialogsKey + "getByIdRequestError", props<{error:string}>());

export const addMessage = createAction(dialogsKey + "addMessage", props<{message: Message}>());
