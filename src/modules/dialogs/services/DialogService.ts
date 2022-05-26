import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IDialogService} from "./interfaces/IDialogService";
import {environment} from "../../../environments/environment";
import {Dialog} from "../../../models/Dialog";

@Injectable()
export default class DialogService implements IDialogService{
  constructor(private client: HttpClient) {}

  getDialogs$(userId: string): Observable<Dialog[]> {
    return this.client.get<Dialog[]>(`${environment.apiRootAddress}/Dialogs/GetDialogs?userId=${userId}`);
  }
}
