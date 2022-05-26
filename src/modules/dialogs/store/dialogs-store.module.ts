import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {dialogEffects} from "./effects";
import {materialsReducer} from "./reducers";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([dialogEffects]),
    StoreModule.forFeature("dialogsState", materialsReducer),
  ]
})
export class DialogsStoreModule { }
