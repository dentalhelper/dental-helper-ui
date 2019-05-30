import { Routes } from '@angular/router';
import { OrcamentoCadastroComponent } from './orcamento-cadastro/orcamento-cadastro.component';

export const ORCAMENTO_ROUTES: Routes = [
  {
    path: 'novo',
    component: OrcamentoCadastroComponent
  },
  {
    path: ':codigo/edit',
    component: OrcamentoCadastroComponent
  }
];
