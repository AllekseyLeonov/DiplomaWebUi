import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../environments/environment";
import {IUserService} from "./interfaces/IUserService";
import {User} from "../../../models/User";

@Injectable()
export default class UserService implements IUserService{
  constructor(private client: HttpClient) {}

  getUserData$(id: string): Observable<User> {
    return this.client.get<User>(`${environment.apiRootAddress}/User/GetUserData?id=${id}`);
  }
}
