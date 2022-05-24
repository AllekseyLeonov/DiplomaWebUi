import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../environments/environment";
import {IUserService} from "./interfaces/IUserService";
import {LoginResponse} from "../../../models/User";

@Injectable()
export default class UserService implements IUserService{
  constructor(private client: HttpClient) {}

  login$(login: string, password: string): Observable<LoginResponse> {
    return this.client.post<LoginResponse>(`${environment.apiRootAddress}/User/Login`, {login, password});
  }
}
