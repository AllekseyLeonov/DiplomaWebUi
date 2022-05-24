import {Material, MaterialPreview} from "../../../models/Material";

export interface MaterialsState {
  materials: Material | null,
  isLoadingForMaterial: boolean,
  requestError: string,
  selectedMaterial: MaterialPreview,
  completedMaterials: string[],
}

export const initialState : MaterialsState = {
  materials: null,
  isLoadingForMaterial: false,
  requestError: "",
  selectedMaterial: {
    id: "00000000-0000-0000-0000-000000000001",
    name: "Переменные",
    description: "В этой теме вы освоите такое понятие как переменные",
    practiceId: "00000000-0000-0000-0000-000000000001",
    theoryId: "00000000-0000-0000-0000-000000000001"
  },
  completedMaterials: [],
}
