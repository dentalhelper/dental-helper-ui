import { Routes } from '@angular/router';

import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';

export const AGENDAMENTO_ROUTES: Routes = [
  {
    path: '',
    component: AgendamentoCadastroComponent
  },
  {
    path: 'novo',
    component: AgendamentoCadastroComponent
  }
];
