import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogsPageComponent} from "./components/dialogs-page/dialogs-page.component";
import {DialogPreviewComponent} from "./components/dialog-preview/dialog-preview.component";
import {DialogComponent} from "./components/dialog/dialog.component";
import {MatIconModule} from "@angular/material/icon";
import DialogService from "./services/DialogService";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    DialogsPageComponent,
    DialogPreviewComponent,
    DialogComponent,
  ],
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule
    ],
  providers: [
    DialogService,
  ]
})
export class DialogsModule { }
