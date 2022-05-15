import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkillsTreeComponent} from "./components/skills-tree/skills-tree.component";
import {MaterialPreviewComponent} from "./components/material-preview/material-preview.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import MaterialService from "./services/MaterialService";



@NgModule({
  declarations: [
    SkillsTreeComponent,
    MaterialPreviewComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [
    MaterialService,
  ]
})
export class MaterialsModule { }
