import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { CreateComponent } from './components/create/create.component';
import { FetchCompComponent } from './components/fetch/fetch-comp/fetch-comp.component';

const routes: Routes = [
  {
    path: '',
    component: FetchCompComponent,
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
