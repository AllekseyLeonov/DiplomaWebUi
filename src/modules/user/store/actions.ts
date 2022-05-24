import {createAction, props} from "@ngrx/store";
import {User} from "../../../models/User";

const usersKey = "[USERS]";

export const getRequest = createAction(usersKey + "getRequest", props<{id: string}>());
export const getRequestSuccess = createAction(usersKey + "getRequestSuccess", props<{user: User}>());
export const getRequestError = createAction(usersKey + "getRequestError", props<{error:string}>());
