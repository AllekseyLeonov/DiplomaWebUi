import {Practice} from "../../../models/Practice";

export interface PracticeState {
  practice: Practice | null,
  isLoadingForPractice: boolean,
  requestError: string,
  consoleMessages: string[],
}

export const initialState : PracticeState = {
  practice: null,
  isLoadingForPractice: false,
  requestError: "",
  consoleMessages: ["waiting for your input..."]
}
