import {createReducer, on} from "@ngrx/store";

import {
  addMessage,
  getByIdRequestSuccess,
  getRequestSuccess,
} from "./actions";
import {initialState} from "./state";
import {Dialog} from "../../../models/Dialog";

export const materialsReducer = createReducer(
  initialState,
  on(getRequestSuccess, (state, action) => {
    return ({...state, dialogs: action.dialogs})
  }),
  on(getByIdRequestSuccess, (state, action) => {
    return ({...state, selectedDialog: action.dialog})
  }),
  on(addMessage, (state, action) => {
    let messages = state.selectedDialog!.messages;
    messages = messages.concat(action.message);
    let dialog: Dialog = {
      id: state.selectedDialog!.id,
      messages: messages,
      moderator: state.selectedDialog!.moderator,
      user: state.selectedDialog!.user,
    };
    return ({...state, selectedDialog: dialog!});
  })
)
