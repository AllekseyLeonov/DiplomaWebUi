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
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

import {DialogComponent} from '../modules/dialogs/components/dialog/dialog.component';
import {PracticeComponent} from '../modules/practice/components/practice/practice.component';
import {DialogsPageComponent} from '../modules/dialogs/components/dialogs-page/dialogs-page.component';
import {DialogsModule} from "../modules/dialogs/dialogs.module";
import {MaterialsModule} from "../modules/materials/materials.module";
import {PracticeModule} from "../modules/practice/practice.module";
import {HttpClientModule} from "@angular/common/http";
import {RootStoreModule} from "../modules/root-store/root-store.module";
import {TheoryPageComponent} from "../modules/theory/components/theory-page/theory-page.component";
import {TheoryModule} from "../modules/theory/theory.module";
import {UserModule} from "../modules/user/user.module";
import { ProfileDialogComponent } from './components/profile-dialog/profile-dialog.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import {FormsModule} from "@angular/forms";
import { CreateAccountDialogComponent } from './components/create-account-dialog/create-account-dialog.component';


const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'dialogs', component: DialogsPageComponent},
  {path: 'dialog/:id', component: DialogComponent},
  {path: 'practice/:id', component: PracticeComponent},
  {path: 'theory/:id', component: TheoryPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileDialogComponent,
    LoginDialogComponent,
    ProfileDialogComponent,
    LoginDialogComponent,
    CreateAccountDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    DialogsModule,
    TheoryModule,
    MaterialsModule,
    PracticeModule,
    UserModule,
    HttpClientModule,
    RootStoreModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    FormsModule,
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
