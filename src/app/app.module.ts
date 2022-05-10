import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsTreeComponent } from './skills-tree/skills-tree.component';
import { HeaderComponent } from './header/header.component';
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { MaterialPreviewComponent } from './material-preview/material-preview.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from "@angular/router";
import { DialogComponent } from './dialog/dialog.component';
import { PracticeComponent } from './practice/practice.component';

const appRoutes: Routes =[
  { path: '', component: MainPageComponent},
  { path: 'dialogs', component: DialogComponent},
  { path: 'practice', component: PracticeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SkillsTreeComponent,
    HeaderComponent,
    MaterialPreviewComponent,
    MainPageComponent,
    DialogComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
