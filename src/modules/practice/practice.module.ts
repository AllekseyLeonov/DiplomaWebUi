import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PracticeComponent} from "./components/practice/practice.component";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import PracticeService from "./services/PracticeService";



@NgModule({
  declarations: [
    PracticeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers:[
    PracticeService
  ]
})
export class PracticeModule { }
