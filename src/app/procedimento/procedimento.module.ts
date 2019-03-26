import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ProcedimentosPesquisaComponent } from './procedimentos-pesquisa/procedimentos-pesquisa.component';
import { PROCEDIMENTO_ROUTES } from './procedimentos.routes';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ProcedimentoCadastroComponent } from './procedimento-cadastro/procedimento-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    TooltipModule,
    ConfirmDialogModule,
    RouterModule.forChild(PROCEDIMENTO_ROUTES)
  ],
  declarations: [
    ProcedimentosPesquisaComponent,
    ProcedimentoCadastroComponent
  ]
})
export class ProcedimentoModule { }
