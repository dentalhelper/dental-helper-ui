import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DESPESA_ROUTES } from './despesas.routes';
import { SharedModule } from '../shared/shared.module';
import { DespesaCadastroComponent } from './despesa-cadastro/despesa-cadastro.component';
import { DespesasPesquisaComponent } from './despesas-pesquisa/despesas-pesquisa.component';

import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  imports: [
    CommonModule,
    FieldsetModule,
    DropdownModule,
    CalendarModule,
    TableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    SelectButtonModule,
    RouterModule.forChild(DESPESA_ROUTES)
  ],
  declarations: [
    DespesasPesquisaComponent,
    DespesaCadastroComponent
  ]
})
export class DespesasModule { }
