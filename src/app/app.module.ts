import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';
import {PasswordModule} from 'primeng/password';
import {DropdownModule} from 'primeng/dropdown';
import {MessageModule} from 'primeng/message';

import { FormalizacaoComponent } from './formalizacao';
import { FormalizacaoService, RelatorioService } from './_services';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';

import {  ErrorInterceptor } from './_helpers';
import { djangoBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CadastraruserComponent } from './cadastraruser';
import { RelatorioPagamentoComponent } from './relatorio-pagamento';
import { RelatorioGeralComponent } from './relatorio-geral';



@NgModule({
  declarations: [
    AppComponent,
    FormalizacaoComponent,
    HomeComponent,
    LoginComponent,    
    CadastraruserComponent, RelatorioPagamentoComponent, RelatorioGeralComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    MenubarModule,
    ToastModule,
    ProgressSpinnerModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    PanelModule,
    PasswordModule,
    DropdownModule,    
    MessageModule,
  ],
  providers: [
    FormalizacaoService,
    RelatorioService,
    djangoBackendProvider,
    
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
