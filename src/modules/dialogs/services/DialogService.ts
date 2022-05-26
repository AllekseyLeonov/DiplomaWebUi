import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IDialogService} from "./interfaces/IDialogService";
import {environment} from "../../../environments/environment";
import {AddMessageFromPracticeRequest, AddMessageRequest, Dialog} from "../../../models/Dialog";

@Injectable()
export default class DialogService implements IDialogService{
  constructor(private client: HttpClient) {}

  getDialogs$(userId: string): Observable<Dialog[]> {
    return this.client.get<Dialog[]>(`${environment.apiRootAddress}/Dialogs/GetDialogs?userId=${userId}`);
  }

  getDialogById$(id: string): Observable<Dialog> {
    return this.client.get<Dialog>(`${environment.apiRootAddress}/Dialogs/GetDialogById?id=${id}`);
  }

  addMessage$(request: AddMessageRequest): Observable<void> {
    return this.client.post<void>(`${environment.apiRootAddress}/Dialogs/AddMessage`, request);
  }

  addMessageFromPractice$(request: AddMessageFromPracticeRequest): Observable<void> {
    return this.client.post<void>(`${environment.apiRootAddress}/Dialogs/AddMessageFromPractice`, request);
  }
}
