import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheoryPageComponent } from './components/theory-page/theory-page.component';
import TheoryService from "./services/TheoryService";

@NgModule({
  declarations: [
    TheoryPageComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    TheoryService
  ]
})
export class TheoryModule { }
