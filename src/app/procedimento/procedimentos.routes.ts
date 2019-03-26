import { Routes } from '@angular/router';
import { ProcedimentosPesquisaComponent } from './procedimentos-pesquisa/procedimentos-pesquisa.component';
import { ProcedimentoCadastroComponent } from './procedimento-cadastro/procedimento-cadastro.component';

export const PROCEDIMENTO_ROUTES: Routes = [
  {
    path: '',
    component: ProcedimentosPesquisaComponent
  },
  {
    path: 'novo',
    component: ProcedimentoCadastroComponent
  },
  {
    path: ':codigo',
    component: ProcedimentoCadastroComponent
  }

];
