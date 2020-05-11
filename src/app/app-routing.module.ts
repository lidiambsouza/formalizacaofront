import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormalizacaoComponent} from './formalizacao';
import {HomeComponent} from './home';
import { LoginComponent } from './login';
import { CadastraruserComponent} from './cadastraruser';
import {RelatorioPagamentoComponent} from './relatorio-pagamento';
import {RelatorioGeralComponent} from './relatorio-geral';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'formalizacao', component: FormalizacaoComponent},
  { path: 'cadastraruser', component: CadastraruserComponent},
  { path: 'relatoriogeral', component: RelatorioGeralComponent},
  { path: 'relatoriopagamento', component: RelatorioPagamentoComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
