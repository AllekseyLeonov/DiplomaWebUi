import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {materialsEffects} from "./effects";
import {materialsReducer} from "./reducers";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([materialsEffects]),
    StoreModule.forFeature("materialsState", materialsReducer),
  ]
})
export class MaterialsStoreModule { }
