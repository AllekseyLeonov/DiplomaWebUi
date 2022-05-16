import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMaterialService} from "./interfaces/IMaterialService";
import {Material} from "../../../models/Material";
import {environment} from "../../../environments/environment";

@Injectable()
export default class MaterialService implements IMaterialService{
  constructor(private client: HttpClient) {}

  getMaterials$(): Observable<Material> {
    return this.client.get<Material>(`${environment.apiRootAddress}/Materials/GetMaterialsTree?technologyId=00000000-0000-0000-0000-000000000001`);
  }
}
