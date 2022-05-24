import {Observable} from "rxjs";

import {Theory} from "../../../../models/Theory";

export interface ITheoryService{
  getTheory$(id: string) : Observable<Theory>
}
