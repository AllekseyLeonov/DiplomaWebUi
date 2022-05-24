import {Observable} from "rxjs";
import {User} from "../../../../models/User";

export interface IUserService{
  getUserData$(id: string) : Observable<User>
}
