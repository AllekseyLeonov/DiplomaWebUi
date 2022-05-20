import {createFeatureSelector, createSelector} from "@ngrx/store";

import {PracticeState} from "./state";

export const featureSelector = createFeatureSelector<PracticeState>("practiceState");
export const practiceSelector = createSelector(featureSelector, state => state.practice);
export const consoleMessagesSelector = createSelector(featureSelector, state => state.consoleMessages);
