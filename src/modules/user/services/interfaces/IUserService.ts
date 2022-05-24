import {Observable} from "rxjs";
import {CreateAccountRequest, CreateAccountResponse, LoginResponse} from "../../../../models/User";

export interface IUserService{
  login$(login: string, password: string) : Observable<LoginResponse>;
  createAccount$(request: CreateAccountRequest): Observable<CreateAccountResponse>;
}
