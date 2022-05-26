import {Observable} from "rxjs";

import {AddMessageFromPracticeRequest, AddMessageRequest, Dialog} from "../../../../models/Dialog";

export interface IDialogService {
  getDialogs$(userId: string) : Observable<Dialog[]>;
  getDialogById$(userId: string) : Observable<Dialog>;
  addMessage$(request: AddMessageRequest) : Observable<void>;
}
