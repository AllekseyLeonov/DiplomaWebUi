import {Material} from "../../../models/Material";

export interface MaterialsState {
  materials: Material | null,
  isLoadingForMaterial: boolean,
  requestError: string,
}

export const initialState : MaterialsState = {
  materials: null,
  isLoadingForMaterial: false,
  requestError: "",
}
