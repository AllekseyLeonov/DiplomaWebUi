import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPracticeService} from "./interfaces/IPracticeService";
import {environment} from "../../../environments/environment";
import {CheckCodeRequest, CheckCodeResponse, Practice} from "../../../models/Practice";
import {AddMessageFromPracticeRequest} from "../../../models/Dialog";

@Injectable()
export default class PracticeService implements IPracticeService{
  constructor(private client: HttpClient) {}

  getPractice$(id: string): Observable<Practice> {
    return this.client.get<Practice>(`${environment.apiRootAddress}/Practice/GetPractice?id=${id}`);
  }

  checkCode(data: CheckCodeRequest): Observable<CheckCodeResponse>{
    return this.client.post<CheckCodeResponse>(`${environment.apiRootAddress}/Code/CheckCode?`, data);
  }

  addMessageFromPractice$(request: AddMessageFromPracticeRequest): Observable<void> {
    return this.client.post<void>(`${environment.apiRootAddress}/Dialogs/AddMessageFromPractice`, request);
  }
}
