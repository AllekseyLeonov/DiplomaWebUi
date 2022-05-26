import {Dialog} from "../../../models/Dialog";

export interface MaterialsState {
  dialogs: Dialog[],
  selectedDialog: Dialog | null,
}

export const initialState : MaterialsState = {
  dialogs:[],
  selectedDialog: null,
}
