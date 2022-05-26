import {Observable} from "rxjs";

import {Practice} from "../../../../models/Practice";
import {AddMessageFromPracticeRequest} from "../../../../models/Dialog";

export interface IPracticeService{
  getPractice$(id: string) : Observable<Practice>;
  addMessageFromPractice$(request: AddMessageFromPracticeRequest) : Observable<void>;
}
