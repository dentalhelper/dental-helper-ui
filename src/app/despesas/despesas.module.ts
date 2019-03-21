import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DespesasPesquisaComponent } from './despesas-pesquisa/despesas-pesquisa.component';
import { DESPESA_ROUTES } from './despesas.routes';

import {FieldsetModule} from 'primeng/fieldset';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';


@NgModule({
  imports: [
    CommonModule,
    FieldsetModule,
    DropdownModule,
    CalendarModule,
    SelectButtonModule,
    RouterModule.forChild(DESPESA_ROUTES)
  ],
  declarations: [DespesasPesquisaComponent]
})
export class DespesasModule { }
