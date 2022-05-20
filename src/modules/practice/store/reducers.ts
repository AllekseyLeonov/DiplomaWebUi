import {createReducer, on} from "@ngrx/store";

import {addConsoleMessage, checkCodeRequestSuccess, getRequest, getRequestError, getRequestSuccess} from "./actions";
import {initialState} from "./state";

export const practiceReducer = createReducer(
  initialState,
  on(getRequest, (state) => {
    return ({...state, isLoadingForPractice: true})
  }),
  on(getRequestSuccess, (state, action) => {
    return ({...state, isLoadingForPractice: false, practice: action.practice})
  }),
  on(getRequestError, (state, action) =>
    ({...state, isLoadingForPractice: false, error: action.error, practice: null})
  ),
  on(checkCodeRequestSuccess, (state, action) => {
    const newMessagesArray = state.consoleMessages.concat(action.response.messages);
    return ({...state, consoleMessages: newMessagesArray})
  }),
  on(addConsoleMessage, (state, action) => {
    const newMessagesArray = state.consoleMessages.concat(action.message);
    return ({...state, consoleMessages: newMessagesArray})
  }),
)
