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
    loadChildren: () => import('./despesas/despesas.module').then(m => m.DespesasModule)
  },
  {
    path: 'procedimentos',
    loadChildren: () => import('./procedimento/procedimento.module').then(m => m.ProcedimentoModule)
  },
  {
    path: 'materiais',
    loadChildren: () => import('./material/material.module').then(m => m.MaterialModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./paciente/paciente.module').then(m => m.PacienteModule)
  },
  {
    path: 'agendamentos',
    loadChildren: () => import('./agendamentos/agendamentos.module').then(m => m.AgendamentosModule)
  },
  {
    path: 'orcamentos',
    loadChildren: () => import('./orcamentos/orcamentos.module').then(m => m.OrcamentosModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
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
