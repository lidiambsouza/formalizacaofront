import { Component, OnInit } from '@angular/core';
import { MessageService, LazyLoadEvent } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { RelatorioService } from '../_services';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { format } from 'url';

@Component({
  selector: 'app-relatorio-geral',
  templateUrl: './relatorio-geral.component.html',
  styleUrls: ['./relatorio-geral.component.css'],
  providers: [MessageService]
})
export class RelatorioGeralComponent implements OnInit {

  adesoes: any[];//dados da adesão do banco
  loadingTable = false;//spinner da tabela
  cols: any[];//colunas da tabela
  consultores: SelectItem[];
  bmg: SelectItem[];
  coban: SelectItem[];
  status: SelectItem[];
  datapg: Date;
  dataup: Date;
  datapI: Date;
  datapF: Date;
  valor: string;
  servico: string;
  consultorS: string;
  bmgS: string;
  cobanS: string;
  statusS: string;
  ptBR: any;
  total: any;

  constructor(private relatorioService: RelatorioService, private messageService: MessageService) { }

  ngOnInit(): void {
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
      { field: 'cpf_consultor', header: 'Consultor CPF' },
      { field: 'limite_cartao', header: 'Limite Cartão' },
      { field: 'status_cartao', header: 'Status Cartão' },
      { field: 'data_pagamento', header: 'Data Pagamento' },
      { field: 'situacao_pagamento', header: 'Situacao Pagamento' },
      { field: 'valor_pagamento', header: 'Valor Pagamento' },
      //  { field: 'error', header: 'error' },
      { field: 'created_at', header: 'Data Criação' },
      { field: 'updated_at', header: 'Data Atualização' }
    ];

    this.ptBR = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
      dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
      monthNames: ["Janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoje',
      clear: 'Limpar'
    }



    //buscar resposta coban
    this.coban = [];
    //this.coban.push({ label: 'Select Item', value: -1});
    this.relatorioService.searchCoban().subscribe(data => {
      // console.log(data)
      for (let i = 0; i < data.length; i++) {
        this.coban.push({ label: data[i], value: data[i] });
        // console.log(data[i])
      }
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'ERROR: ', detail: 'Error ao buscar coban', closable: false });
    }, () => {
      console.log("ok coban");
    });

    //buscar resposta bmg
    this.bmg = [];
    //this.bmg.push({ label: 'Select Item', value: -1});
    this.relatorioService.searchBMG().subscribe(data => {
      //console.log(data)
      for (let i = 0; i < data.length; i++) {
        this.bmg.push({ label: data[i], value: data[i] });
        // console.log(data[i])
      }
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'ERROR: ', detail: 'Error ao buscar BMG', closable: false });
    }, () => {
      console.log("ok bmg");
    });

    //buscar consultores
    this.consultores = [];
    //this.consultores.push({ label: 'Select Item', value: -1});
    this.relatorioService.searchConsultor().subscribe(data => {
      //console.log(data)
      for (let i = 0; i < data.length; i++) {
        this.consultores.push({ label: data[i], value: data[i] });
        // console.log(data[i])
      }
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'ERROR: ', detail: 'Error ao buscar consultores', closable: false });
    }, () => {
      console.log("ok consultores");
    });


    //buscar status
    this.status = [];
    //this.status.push({ label: 'Select Item', value: -1});
    this.relatorioService.searchStatus().subscribe(data => {
      // console.log(data)
      for (let i = 0; i < data.length; i++) {
        this.status.push({ label: data[i], value: data[i] });
        //console.log(data[i])
      }
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'ERROR: ', detail: 'Error ao buscar status', closable: false });
    }, () => {
      console.log("ok status");
    });

  }

  formatarData(data): any{
    if(data){
      let formtdata= formatDate(data,'yyyy-MM-dd',"pt");
      return formtdata;
    }
    
    return data;
  }

  buscar() {
    //searchConsultorCorban dd/MM/yyyy
    this.loadingTable = true;
    console.log(this.consultorS)
    console.log(this.bmgS)
    console.log(this.cobanS)
    console.log(this.datapg)
    console.log(this.dataup)
    console.log(this.formatarData(this.datapI))
   
    

    this.relatorioService.searchConsultorCorban(this.consultorS, this.cobanS, this.bmgS, this.statusS, this.formatarData(this.datapg), this.formatarData(this.dataup), this.valor, this.servico,this.formatarData(this.datapI), this.formatarData(this.datapF)).subscribe(data => {
      // console.log(data)
      console.log(data)
      this.adesoes = data.data;
      this.total = data.aggregate.id__count;
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'ERROR: ', detail: 'Error ao buscar dados', closable: false });
    }, () => {
      console.log("ok busca");
      this.loadingTable = false;
    });

  }

}
