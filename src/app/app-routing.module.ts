import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormalizacaoComponent, HomeComponent} from './formalizacao';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'formalizacao', component: FormalizacaoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
