import { Component, OnInit } from '@angular/core';
import {FormalizacaoService} from '../_services/formalizacao.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-formalizacao',
  templateUrl: './formalizacao.component.html',
  styleUrls: ['./formalizacao.component.css']
})
export class FormalizacaoComponent implements OnInit {

  ngUnsubscribe = new Subject();

  constructor(private formService: FormalizacaoService) { }

  ngOnInit() {
   
     // this.search(); buscar aqui
    

  }

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
