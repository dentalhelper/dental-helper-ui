import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DespesasPesquisaComponent } from './despesas-pesquisa/despesas-pesquisa.component';
import { DespesaCadastroComponent } from './despesa-cadastro/despesa-cadastro.component';
import { SharedModule } from '../shared/shared.module';
import { DESPESA_ROUTES } from './despesas.routes';

import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    FieldsetModule,
    DropdownModule,
    CalendarModule,
    TableModule,
    SharedModule,
    RouterModule.forChild(DESPESA_ROUTES)
  ],
  declarations: [
    DespesasPesquisaComponent,
    DespesaCadastroComponent
  ]
})
export class DespesasModule { }
