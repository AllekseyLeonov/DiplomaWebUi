import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MainPageComponent} from '../modules/materials/components/main-page/main-page.component';
import {RouterModule, Routes} from "@angular/router";
import {MatInputModule} from "@angular/material/input";

import {DialogComponent} from '../modules/dialogs/components/dialog/dialog.component';
import {PracticeComponent} from '../modules/practice/components/practice/practice.component';
import {DialogsPageComponent} from '../modules/dialogs/components/dialogs-page/dialogs-page.component';
import {DialogsModule} from "../modules/dialogs/dialogs.module";
import {MaterialsModule} from "../modules/materials/materials.module";
import {PracticeModule} from "../modules/practice/practice.module";
import {HttpClientModule} from "@angular/common/http";
import {RootStoreModule} from "../modules/root-store/root-store.module";

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'dialogs', component: DialogsPageComponent},
  {path: 'dialog', component: DialogComponent},
  {path: 'practice/:id', component: PracticeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    DialogsModule,
    MaterialsModule,
    PracticeModule,
    HttpClientModule,
    RootStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
