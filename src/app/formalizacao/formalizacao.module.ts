import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormalizacaoComponent } from './formalizacao';
import {FormalizacaoService} from './_services/formalizacao.service';




@NgModule({
  declarations: [FormalizacaoComponent],
  exports: [FormalizacaoComponent],
  imports: [
    CommonModule
  ],
  providers:[FormalizacaoService]
  
})
export class FormalizacaoModule { }
