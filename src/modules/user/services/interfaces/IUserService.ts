import {Observable} from "rxjs";
import {LoginResponse} from "../../../../models/User";

export interface IUserService{
  login$(login: string, password: string) : Observable<LoginResponse>
}
