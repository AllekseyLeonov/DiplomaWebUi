import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../environments/environment";
import {ITheoryService} from "./interfaces/ITheoryService";
import {Theory} from "../../../models/Theory";

@Injectable()
export default class TheoryService implements ITheoryService{
  constructor(private client: HttpClient) {}

  getTheory$(id: string): Observable<Theory> {
    return this.client.get<Theory>(`${environment.apiRootAddress}/TheoryPages/Page`);
  }
}
