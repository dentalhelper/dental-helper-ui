import { Routes } from '@angular/router';
import { PacientesPesquisaComponent } from './pacientes-pesquisa/pacientes-pesquisa.component';
import { PacienteCadastroComponent } from './paciente-cadastro/paciente-cadastro.component';
import { ProntuarioComponent } from './prontuario/prontuario.component';
import { PacienteDadosComponent } from './paciente-dados/paciente-dados.component';
import { AnamneseComponent } from './anamnese/anamnese.component';

export const PACIENTE_ROUTES: Routes = [
  {
    path: '',
    component: PacientesPesquisaComponent
  },
  {
    path: 'novo',
    component: PacienteCadastroComponent
  },
  {
    path: ':codigo',
    component: ProntuarioComponent,
    children: [
      {
        path: '',
        redirectTo: 'edit'
      },
      {
        path: 'edit',
        component: PacienteDadosComponent
      },
      {
        path: 'anamnese',
        component: AnamneseComponent
      }
    ]
  }
];
