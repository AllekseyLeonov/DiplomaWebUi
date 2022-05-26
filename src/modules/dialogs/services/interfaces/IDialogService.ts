import {Observable} from "rxjs";

import {Dialog} from "../../../../models/Dialog";

export interface IDialogService {
  getDialogs$(userId: string) : Observable<Dialog[]>
}
