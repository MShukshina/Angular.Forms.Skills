import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NameComponent } from './name/name.component';
import { SkillsComponent } from './skills/skills.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreeFilesComponent } from './tree-files/tree-files.component';
import { QueriesComponent } from './queries/queries.component';
import { NodeComponent } from './tree-files/node/node.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'name', pathMatch: 'full'},
  { path: 'name', component: NameComponent},
  { path: 'skils', component: SkillsComponent},
  { path: 'queries', component: QueriesComponent},
  { path: 'tree', component: TreeFilesComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NameComponent,
    SkillsComponent,
    TreeFilesComponent,
    QueriesComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot((appRoutes)),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
