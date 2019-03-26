import { Routes } from '@angular/router';
import { CategoriaDespesaPesquisaComponent } from './categoria-despesa/categoria-despesa-pesquisa/categoria-despesa-pesquisa.component';

export const ROUTES: Routes = [

  {
    path: 'categorias-despesa',
    component: CategoriaDespesaPesquisaComponent
  },
  {
    path: 'despesas',
    loadChildren: './despesas/despesas.module#DespesasModule'
  },
  {
    path: 'procedimentos',
    loadChildren: './procedimento/procedimento.module#ProcedimentoModule'
  },

];
