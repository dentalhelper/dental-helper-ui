import { Routes } from '@angular/router';

import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { AgendamentoPesquisaComponent } from './agendamento-pesquisa/agendamento-pesquisa.component';

export const AGENDAMENTO_ROUTES: Routes = [
  {
    path: '',
    component: AgendamentoPesquisaComponent
  },
  {
    path: 'novo',
    component: AgendamentoCadastroComponent
  }
];
