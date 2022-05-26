import {User} from "../../../models/User";
import {json} from "d3";

export interface UserState {
  user: User | null,
}

export const initialState : UserState = {
  user: null
}
