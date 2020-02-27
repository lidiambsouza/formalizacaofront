import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';


import {FormalizacaoService} from '../_services/formalizacao.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-formalizacao',
  templateUrl: './formalizacao.component.html',
  styleUrls: ['./formalizacao.component.css'],
  providers: [MessageService]
})
export class FormalizacaoComponent implements OnInit {

  adesoes: any[];
  cols: any[];
  display: boolean = false;
  imageToShow: any;
  loadingImg = false;
  loadingTable=true;
  
  values = '';
  

  constructor(private formalizacaoService: FormalizacaoService, private messageService: MessageService) { }

  

  ngOnInit() {    
    this.display = true;
    this.cols=[
                       { field: 'number', header: 'Número' },
                       { field: 'status', header: 'Status' },                       
                       { field: 'cpf', header: 'CPF' },
                       { field: 'nome', header: 'Cliente' },
                       { field: 'matricula', header: 'Matrícula' },
                       { field: 'data_proposta', header: 'Data Proposta' },
                       { field: 'servico', header: 'Serviço' },
                       { field: 'loja', header: 'Loja' },
                       { field: 'entidade', header: 'Entidade' },
                       { field: 'valor', header: 'Valor' },
                       { field: 'resp_bmg', header: 'Resposta BMG' },
                       { field: 'resp_corban', header: 'Resposta Corban' },
                       { field: 'consultor', header: 'Consultor' },
                       { field: 'limite_cartao', header: 'Limite Cartão' },
                       { field: 'status_cartao', header: 'Status Cartão' },
                     //  { field: 'error', header: 'error' },
                       { field: 'created_at', header: 'Data Criação'},
                       { field: 'updated_at', header: 'Data Atualização'}
    ];     
     this.formalizacaoService.searchImg().pipe().subscribe(
      data =>{
        this.createImageFromBlob(data); 
              
      },
       error => {
       console.log('Error ao buscar imagem');
     }

    );   

    
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
       this.loadingImg = true;
       
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }
 

 buscaBmg(event: any){
  this.values += event.target.value + '';
  this.display = false;
  if(this.values){
    this.messageService.clear();
  this.formalizacaoService.searchAdesao(this.values).pipe().subscribe(
    data =>{
      console.log(data)
      this.adesoes = data;               
    },
     error => {
     console.log('Error ao buscar adesões');
   }

  );  
  this.loadingTable=false;
}
  else{
    this.messageService.add({severity:'error', summary:'ERROR: ', detail:'Digite captcha', closable:false});
    this.display = true;

  }
 }
  ngOnDestroy(){
    
  }
  

 
  }

 


