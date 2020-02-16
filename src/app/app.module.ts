import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';

import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';

import { FormalizacaoModule} from  './formalizacao';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FormalizacaoModule,
    MenubarModule,
    ButtonModule,   
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
