import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formalizacaofront';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
        {
            label: 'Formalização',
            icon: 'pi pi-fw pi-file',
            items: [{
                    label: 'Consulta', 
                    icon: 'pi pi-fw pi-search',
                    routerLink: ['/formalizacao'],
                
                    
                }               
            ]
        },
       
        {
            label: 'Relátorios',
            icon: 'pi pi-fw pi-chart-line',
            items: [
                {
                    label: 'Relátorio B',
                    icon: 'pi pi-fw pi-chart-bar'
                },
                {
                    label: 'Relátorio B',
                    icon: 'pi pi-fw pi-list'
                },
            ]
        },
        {
            label: 'Administração',
            icon: 'pi pi-fw pi-cog',
            items: [
                {
                    label: 'Cadastrar usuário',
                    icon: 'pi pi-fw pi-user-plus'                    
                },
                {
                    label: 'Consultar usuário',
                    icon: 'pi pi-fw pi-user'                    
                },
                {
                    label: 'Editar usuário',
                    icon: 'pi pi-fw pi-user-minus'                    
                },
            ]
        },
        
    ];
}


}
