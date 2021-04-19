import { Component, NgModule, QueryList } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryListComponent } from './query-list/query-list.component';
import { QueryRaisingComponent } from './query-raising/query-raising.component';

const routes: Routes = [
  { path: '', component: QueryRaisingComponent },
  { path: 'queryList', component: QueryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
