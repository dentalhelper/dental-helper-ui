import { Routes } from '@angular/router';
import { PacientesPesquisaComponent } from './pacientes-pesquisa/pacientes-pesquisa.component';
import { PacienteCadastroComponent } from './paciente-cadastro/paciente-cadastro.component';

export const PACIENTE_ROUTES: Routes = [
  {
    path: '',
    component: PacientesPesquisaComponent
  },
  {
    path: 'novo',
    component: PacienteCadastroComponent
  }
];
