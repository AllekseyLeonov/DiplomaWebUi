import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PracticeComponent} from "./components/practice/practice.component";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import PracticeService from "./services/PracticeService";
import {RouterModule} from "@angular/router";
import { AddMessageDialogComponent } from './components/add-message-dialog/add-message-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PracticeComponent,
    AddMessageDialogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers:[
    PracticeService
  ]
})
export class PracticeModule { }
