import { Component, NgModule, QueryList } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QueryListComponent } from './query-list/query-list.component';
import { QueryRaisingComponent } from './query-raising/query-raising.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'queryRaising', component: QueryRaisingComponent },
  { path: 'queryList', component: QueryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
