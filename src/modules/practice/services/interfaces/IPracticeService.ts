import {Observable} from "rxjs";

import {Practice} from "../../../../models/Practice";

export interface IPracticeService{
  getPractice$(id: string) : Observable<Practice>
}
