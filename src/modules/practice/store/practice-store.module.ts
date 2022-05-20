import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {practiceEffects} from "./effects";
import {practiceReducer} from "./reducers";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([practiceEffects]),
    StoreModule.forFeature("practiceState", practiceReducer),
  ]
})
export class PracticeStoreModule { }
