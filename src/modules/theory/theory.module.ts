import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheoryPageComponent } from './components/theory-page/theory-page.component';
import TheoryService from "./services/TheoryService";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    TheoryPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  providers:[
    TheoryService
  ]
})
export class TheoryModule { }
