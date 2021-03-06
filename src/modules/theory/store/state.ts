import {Theory} from "../../../models/Theory";

export interface PracticeState {
  theory: Theory,
  isLoadingForTheory: boolean,
  requestError: string,
}

export const initialState : PracticeState = {
  theory: {
    id: '',
    content: '',
  },
  isLoadingForTheory: false,
  requestError: "",
}
