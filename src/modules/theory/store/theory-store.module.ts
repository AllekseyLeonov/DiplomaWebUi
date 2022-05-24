import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {theoryEffects} from "./effects";
import {theoryReducer} from "./reducers";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([theoryEffects]),
    StoreModule.forFeature("theoryState", theoryReducer),
  ]
})
export class TheoryStoreModule { }
