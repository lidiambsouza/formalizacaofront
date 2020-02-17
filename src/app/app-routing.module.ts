import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormalizacaoComponent} from './formalizacao';

const routes: Routes = [
  { path: 'formalizacao', component: FormalizacaoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
