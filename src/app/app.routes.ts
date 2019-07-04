import { Routes } from '@angular/router';

import { AuthGuard } from './seguranca/guards/auth.guard';
import { LoginComponent } from './seguranca/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { PageForbiddenComponent } from './core/pages/page-forbidden/page-forbidden.component';
import { CategoriaDespesaPesquisaComponent } from './categoria-despesa/categoria-despesa-pesquisa/categoria-despesa-pesquisa.component';

export const ROUTES: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
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
    canActivate: [AuthGuard],
    data: { roles: ['ADMINISTRADOR', 'ASSISTENTE'] },
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
    path: 'odontograma',
    canActivate: [AuthGuard],
    data: { roles: ['ADMINISTRADOR', 'ASSISTENTE'] },
    loadChildren: './odontograma/odontograma.module#OdontogramaModule'
  },
  {
    path: 'usuarios',
    canActivate: [AuthGuard],
    data: { roles: ['ADMINISTRADOR'] },
    loadChildren: './usuarios/usuarios.module#UsuariosModule'
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: 'forbidden',
    component: PageForbiddenComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  },

];
