import { Routes } from '@angular/router';

import { AnamneseComponent } from './anamnese/anamnese.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ProntuarioComponent } from './prontuario/prontuario.component';
import { PacienteDadosComponent } from './paciente-dados/paciente-dados.component';
import { PacienteCadastroComponent } from './paciente-cadastro/paciente-cadastro.component';
import { PacientesPesquisaComponent } from './pacientes-pesquisa/pacientes-pesquisa.component';

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
        path: 'consultas',
        component: ConsultasComponent
      },
      {
        path: 'anamnese',
        component: AnamneseComponent
      }
    ]
  }
];
