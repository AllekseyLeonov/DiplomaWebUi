import {createFeatureSelector, createSelector} from "@ngrx/store";

import {MaterialsState} from "./state";

export const featureSelector = createFeatureSelector<MaterialsState>("materialsState");
export const materialsSelector = createSelector(featureSelector, state => state.materials);
export const selectedMaterialSelector = createSelector(featureSelector, state => state.selectedMaterial);
export const completedMaterialsSelector = createSelector(featureSelector, state => state.completedMaterials);
