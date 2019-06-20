import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NameComponent } from './name/name.component';
import { SkillsComponent } from './skills/skills.component';

import {RouterModule, Router, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: '', redirectTo: 'name', pathMatch: 'full'},
  { path: 'name', component: NameComponent},
  { path: 'skils', component: SkillsComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NameComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot((appRoutes)),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
