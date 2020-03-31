import { Component, OnInit } from '@angular/core';
import { MessageService, LazyLoadEvent } from 'primeng/api';


import { FormalizacaoService } from '../_services/formalizacao.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-formalizacao',
  templateUrl: './formalizacao.component.html',
  styleUrls: ['./formalizacao.component.css'],
  providers: [MessageService]
})
export class FormalizacaoComponent implements OnInit {

  btSearchBMG: boolean;
  adesoes: any[];//dados da adesão do banco

  cols: any[];//colunas da tabela
  display: boolean = false;//não mostrar o modal
  imageToShow: any; //imagem do captcha
  loadingImg = false;//spinner do captcha
  loadingTable = true;//spinner da tabela


  values = '';//captcha digitado pelo usuario


  constructor(private formalizacaoService: FormalizacaoService, private messageService: MessageService) { }



  ngOnInit() {
    this.formalizacaoService.btSearchBMG.subscribe(x => this.btSearchBMG = x)
    console.log(this.btSearchBMG)
    
    this.cols = [//definir colunas da tabela
      { field: 'number', header: 'Número' },
      { field: 'status', header: 'Status' },
      { field: 'cpf', header: 'CPF' },
      { field: 'nome', header: 'Cliente' },
      //{ field: 'matricula', header: 'Matrícula' },
      { field: 'data_proposta', header: 'Data Proposta' },
      { field: 'servico', header: 'Serviço' },
     // { field: 'loja', header: 'Loja' },
      { field: 'entidade', header: 'Entidade' },
     // { field: 'valor', header: 'Valor' },
      { field: 'resp_bmg', header: 'Resposta BMG' },
      { field: 'resp_corban', header: 'Resposta Corban' },
      { field: 'consultor', header: 'Consultor' },
      { field: 'limite_cartao', header: 'Limite Cartão' },
      { field: 'status_cartao', header: 'Status Cartão' },
      { field: 'data_pagamento', header: 'Data Pagamento' },
      { field: 'situacao_pagamento', header: 'Situacao Pagamento' },
      { field: 'valor_pagamento', header: 'Valor Pagamento' },
      //  { field: 'error', header: 'error' },
      { field: 'created_at', header: 'Data Criação' },
      { field: 'updated_at', header: 'Data Atualização' }
    ];
    //busca todas as adesões no banco de dados
    this.formalizacaoService.searchAdesao().subscribe(data => {
      this.adesoes = data;
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'ERROR: ', detail: 'Error ao buscar Adesões', closable: false });
    }, () => {
      
      this.loadingTable = false;
    });

  }

  upBmg() {
    
    this.seachAdeApi();
  }

  seachAdeApi() {
    this.formalizacaoService.searchAdesaoApi().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log('Error ao buscar AdesaoApi');
        this.messageService.add({ severity: 'error', summary: 'ERROR: ', detail: 'Error ao buscar Adesões Integradas', closable: false });
      },
      () => { 
        this.display = true;
        this.seachImagem();
      }
    );
  }

  seachImagem() {
    this.formalizacaoService.searchImg().subscribe(
      data => {

        this.createImageFromBlob(data);

      },
      error => {
        console.log('Error ao buscar imagem');
        this.messageService.add({ severity: 'error', summary: 'ERROR: ', detail: 'Error ao buscar imagem', closable: false });
      }

    );

  }
  //renderizar a imagem
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


  buscaBmg(event: any) {
    this.values += event.target.value + '';//verificar o que foi digitado
    this.display = false;
    if (this.values) {
      this.messageService.clear();
      this.formalizacaoService.updatebtSearchBMGValue(true);
      console.log(this.btSearchBMG)
      this.formalizacaoService.searchAdesaoBMG(this.values).subscribe(
        data => {
          console.log("aquiiii")
          console.log(data)
          this.adesoes = data;
         

        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'ERROR: ', detail: 'Captcha invalido!!!', closable: false });
          this.formalizacaoService.updatebtSearchBMGValue(false);
          console.log(this.btSearchBMG)
          
          this.display = true;
          this.loadingImg = false;
          this.values = '';
          this.seachImagem();
          
        },
        () => {
          this.formalizacaoService.updatebtSearchBMGValue(false);
          console.log(this.btSearchBMG)
          this.loadingTable = false;
        }

      );

    }
    else {
      this.messageService.add({ severity: 'error', summary: 'ERROR: ', detail: 'Digite captcha', closable: false });
      this.display = true;

    }
  }



  ngOnDestroy() {

  }



}




