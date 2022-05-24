import {createAction, props} from "@ngrx/store";
import {LoginResponse, User} from "../../../models/User";

const usersKey = "[USERS]";

export const login = createAction(usersKey + "login", props<{login: string, password: string}>());
export const loginSuccess = createAction(usersKey + "loginSuccess", props<{response: LoginResponse}>());
export const loginError = createAction(usersKey + "loginError", props<{error:string}>());

export const setUserData = createAction(usersKey + "setUserData", props<{user: User | null}>())
