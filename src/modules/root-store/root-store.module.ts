import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {MaterialsStoreModule} from "../materials/store/materials-store.module";
import {PracticeStoreModule} from "../practice/store/practice-store.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsStoreModule,
    PracticeStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})

export class RootStoreModule { }
