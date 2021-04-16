import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryRaisingComponent } from './query-raising/query-raising.component';

const routes: Routes = [
  {
    path:'', component:QueryRaisingComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
