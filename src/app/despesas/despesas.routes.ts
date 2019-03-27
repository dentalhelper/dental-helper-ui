import { Routes } from '@angular/router';
import { DespesasPesquisaComponent } from './despesas-pesquisa/despesas-pesquisa.component';
import { DespesaCadastroComponent } from './despesa-cadastro/despesa-cadastro.component';

export const DESPESA_ROUTES: Routes = [
  {
    path: '',
    component: DespesasPesquisaComponent
  },
  {
    path: 'novo',
    component: DespesaCadastroComponent
  },
  {
    path: ':codigo/edit',
    component: DespesaCadastroComponent
  }
];
