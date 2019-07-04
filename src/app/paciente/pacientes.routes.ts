import { Routes } from '@angular/router';

import { AuthGuard } from '../seguranca/guards/auth.guard';
import { AnamneseComponent } from './anamnese/anamnese.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ProntuarioComponent } from './prontuario/prontuario.component';
import { OrcamentosComponent } from './orcamentos/orcamentos.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { OdontogramaComponent } from './odontograma/odontograma.component';
import { ProcedimentosComponent } from './procedimentos/procedimentos.component';
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
        path: 'orcamentos',
        component: OrcamentosComponent
      },
      {
        path: 'pagamentos',
        component: PagamentosComponent
      },
      {
        path: 'procedimentos',
        component: ProcedimentosComponent
      },
      {
        path: 'odontograma',
        canActivate: [AuthGuard],
        data: { roles: ['ADMINISTRADOR', 'ASSISTENTE'] },
        component: OdontogramaComponent
      },
      {
        path: 'anamnese',
        canActivate: [AuthGuard],
        data: { roles: ['ADMINISTRADOR', 'ASSISTENTE'] },
        component: AnamneseComponent
      }
    ]
  }
];
