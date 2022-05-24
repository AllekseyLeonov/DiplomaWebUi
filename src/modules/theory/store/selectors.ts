import {createFeatureSelector, createSelector} from "@ngrx/store";

import {PracticeState} from "./state";

export const featureSelector = createFeatureSelector<PracticeState>("theoryState");
export const theoryContentSelector = createSelector(featureSelector, state => state.theory);
