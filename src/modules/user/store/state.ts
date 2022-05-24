import {User} from "../../../models/User";

export interface UserState {
  user: User | null,
}

export const initialState : UserState = {
  user: null
}
