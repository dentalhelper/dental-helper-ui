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
  {
    path: 'materiais',
    loadChildren: './material/material.module#MaterialModule'
  },
  {
    path: 'pacientes',
    loadChildren: './paciente/paciente.module#PacienteModule'
  },
  {
    path: 'agendamentos',
    loadChildren: './agendamentos/agendamentos.module#AgendamentosModule'
  },
  {
    path: 'orcamentos',
    loadChildren: './orcamentos/orcamentos.module#OrcamentosModule'
  },

];
