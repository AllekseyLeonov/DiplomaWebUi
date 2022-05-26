import {createFeatureSelector, createSelector} from "@ngrx/store";

import {MaterialsState} from "./state";

export const featureSelector = createFeatureSelector<MaterialsState>("dialogsState");
export const dialogsSelector = createSelector(featureSelector, state => state.dialogs);
