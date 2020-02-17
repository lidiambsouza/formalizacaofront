import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';

import { FormalizacaoComponent } from './formalizacao';
import {FormalizacaoService} from './_services/formalizacao.service';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [FormalizacaoComponent, HomeComponent],
  exports: [FormalizacaoComponent],
  imports: [
    CommonModule,
    TableModule,
   
  ],
  providers:[FormalizacaoService]
  
})
export class FormalizacaoModule { }
