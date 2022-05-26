import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogsPageComponent} from "./components/dialogs-page/dialogs-page.component";
import {DialogPreviewComponent} from "./components/dialog-preview/dialog-preview.component";
import {DialogComponent} from "./components/dialog/dialog.component";
import {MatIconModule} from "@angular/material/icon";
import DialogService from "./services/DialogService";
import {RouterModule} from "@angular/router";
import {CdkScrollableModule} from "@angular/cdk/scrolling";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    DialogsPageComponent,
    DialogPreviewComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    CdkScrollableModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    DialogService,
  ]
})
export class DialogsModule { }
