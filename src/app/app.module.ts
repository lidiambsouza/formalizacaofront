import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormalizacaoModule} from  './formalizacao';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FormalizacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
