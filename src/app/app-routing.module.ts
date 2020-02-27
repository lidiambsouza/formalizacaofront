import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormalizacaoComponent} from './formalizacao';
import {HomeComponent} from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'formalizacao', component: FormalizacaoComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
