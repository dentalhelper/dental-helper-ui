import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DespesasPesquisaComponent } from './despesas-pesquisa/despesas-pesquisa.component';
import { SharedModule } from '../shared/shared.module';
import { DESPESA_ROUTES } from './despesas.routes';

import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    FieldsetModule,
    DropdownModule,
    CalendarModule,
    SelectButtonModule,
    TableModule,
    SharedModule,
    RouterModule.forChild(DESPESA_ROUTES)
  ],
  declarations: [DespesasPesquisaComponent]
})
export class DespesasModule { }
