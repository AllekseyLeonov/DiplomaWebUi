import {Dialog} from "../../../models/Dialog";

export interface MaterialsState {
  dialogs: Dialog[],
}

export const initialState : MaterialsState = {
  dialogs:[],
}
