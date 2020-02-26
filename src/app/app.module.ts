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
import { FormalizacaoComponent } from './formalizacao';
import { FormalizacaoService } from './_services/formalizacao.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';

import {  ErrorInterceptor } from './_helpers';
import { djangoBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    FormalizacaoComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    MenubarModule,
    ProgressSpinnerModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    PanelModule
  ],
  providers: [
    FormalizacaoService,
    djangoBackendProvider,
    
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
