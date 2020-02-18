import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormalizacaoComponent } from './formalizacao';
import {FormalizacaoService} from './_services';

import { fakeBackendProvider } from './_helpers';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';  
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';


@NgModule({
  declarations: [FormalizacaoComponent, HomeComponent],
  exports: [FormalizacaoComponent],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    InputTextModule
   
  ],
  providers:[FormalizacaoService]
  
})
export class FormalizacaoModule { }
