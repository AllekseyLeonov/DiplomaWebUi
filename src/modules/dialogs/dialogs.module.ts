import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogsPageComponent} from "./components/dialogs-page/dialogs-page.component";
import {DialogPreviewComponent} from "./components/dialog-preview/dialog-preview.component";
import {DialogComponent} from "./components/dialog/dialog.component";

@NgModule({
  declarations: [
    DialogsPageComponent,
    DialogPreviewComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DialogsModule { }
