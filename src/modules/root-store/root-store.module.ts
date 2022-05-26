import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {MaterialsStoreModule} from "../materials/store/materials-store.module";
import {PracticeStoreModule} from "../practice/store/practice-store.module";
import {TheoryStoreModule} from "../theory/store/theory-store.module";
import {UserStoreModule} from "../user/store/user-store.module";
import {DialogsStoreModule} from "../dialogs/store/dialogs-store.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsStoreModule,
    PracticeStoreModule,
    TheoryStoreModule,
    UserStoreModule,
    DialogsStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})

export class RootStoreModule { }
