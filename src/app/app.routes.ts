import { Routes } from '@angular/router';
import { CategoriaDespesaPesquisaComponent } from './categoria-despesa/categoria-despesa-pesquisa/categoria-despesa-pesquisa.component';
import { LoginComponent } from './seguranca/login/login.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';

export const ROUTES: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
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
  {
    path: 'usuarios',
    loadChildren: './usuarios/usuarios.module#UsuariosModule'
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  },

];
