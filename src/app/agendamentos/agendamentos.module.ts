import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AGENDAMENTO_ROUTES } from './agendamentos.routes';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';

@NgModule({
  declarations: [
    AgendamentoCadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AGENDAMENTO_ROUTES)
  ]
})
export class AgendamentosModule { }
