import {createAction, props} from "@ngrx/store";
import {CreateAccountRequest, CreateAccountResponse, LoginResponse, User} from "../../../models/User";

const usersKey = "[USERS]";

export const login = createAction(usersKey + "login", props<{login: string, password: string}>());
export const loginSuccess = createAction(usersKey + "loginSuccess", props<{response: LoginResponse}>());
export const loginError = createAction(usersKey + "loginError", props<{error:string}>());

export const createAccount =
  createAction(usersKey + "createAccount", props<{request: CreateAccountRequest}>());
export const createAccountSuccess =
  createAction(usersKey + "createAccountSuccess", props<{response: CreateAccountResponse}>());
export const createAccountError =
  createAction(usersKey + "createAccountError", props<{error:string}>());

export const setUserData = createAction(usersKey + "setUserData", props<{user: User | null}>())
