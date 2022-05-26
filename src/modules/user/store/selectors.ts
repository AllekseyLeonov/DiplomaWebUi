import {createFeatureSelector, createSelector} from "@ngrx/store";

import {UserState} from "./state";

export const featureSelector = createFeatureSelector<UserState>("userState");
export const userSelector = createSelector(featureSelector, state => {
  console.log("user", state.user);
  return state.user
});
