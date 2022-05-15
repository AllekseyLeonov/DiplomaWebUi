import {Observable} from "rxjs";

import {Material} from "../../../../models/Material";

export interface IMaterialService{
  getMaterials$() : Observable<Material>
}
