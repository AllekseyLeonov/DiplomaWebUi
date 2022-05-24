import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import {userEffects} from "./effects";
import {userReducer} from "./reducers";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([userEffects]),
    StoreModule.forFeature("userState", userReducer),
  ]
})
export class UserStoreModule { }
