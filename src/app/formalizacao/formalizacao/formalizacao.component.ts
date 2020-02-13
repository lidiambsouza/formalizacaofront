import { Component, OnInit } from '@angular/core';
import {FormalizacaoService} from '../_services/formalizacao.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-formalizacao',
  templateUrl: './formalizacao.component.html',
  styleUrls: ['./formalizacao.component.css']
})
export class FormalizacaoComponent implements OnInit {

  adesoes = [];
  
  

  constructor(private formalizacaoService: FormalizacaoService) { }

  ngOnInit() {     
    this.formalizacaoService.searchAdesao().subscribe(
      data =>{
        this.adesoes = data ;
      },
      error => {
        console.log('Error ao buscar adesões')
      }
    );
    
  }

  ngOnDestroy(){
    
  }
      
  }

 


