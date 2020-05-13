import { Component, OnInit } from '@angular/core';
import { MessageService, LazyLoadEvent } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { RelatorioService } from '../_services';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-relatorio-pagamento',
  templateUrl: './relatorio-pagamento.component.html',
  styleUrls: ['./relatorio-pagamento.component.css'],
  providers: [MessageService]
})
export class RelatorioPagamentoComponent implements OnInit {
 
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

  somaValor: string;
  somaValorPagamento: string;

  constructor(private relatorioService: RelatorioService, private messageService: MessageService) { }

  ngOnInit(): void {
   

    this.ptBR= {
      firstDayOfWeek: 0,
      dayNames: [ "Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado" ],
      dayNamesShort: [ "dom","seg","ter","qua","qui","sex","sab" ],
      dayNamesMin: ["D", "S","T","Q","Q","S","S" ],
      monthNames: [ "Janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
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

  buscar(){
    //searchConsultorCorban
    console.log(this.consultorS)
    console.log(this.bmgS)
    console.log(this.cobanS)
    console.log(this.datapg)
    console.log(this.dataup)

    this.relatorioService.searchOperator(this.consultorS, this.cobanS, this.bmgS, this.statusS, this.formatarData(this.datapg), this.formatarData(this.dataup), this.valor, this.servico,this.formatarData(this.datapI), this.formatarData(this.datapF)).subscribe(data => {
      // console.log(data)
      console.log(data)
     this.somaValor=data.soma_valor;
      this.somaValorPagamento=data.soma_valor_pagamento;
     }, error => {
       this.messageService.add({ severity: 'error', summary: 'ERROR: ', detail: 'Error ao buscar dados', closable: false });
     }, () => {
       console.log("ok busca");
     });
     
  }
}
