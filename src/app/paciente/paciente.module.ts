import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PACIENTE_ROUTES } from './pacientes.routes';
import { SharedModule } from '../shared/shared.module';
import { PacientesPesquisaComponent } from './pacientes-pesquisa/pacientes-pesquisa.component';

@NgModule({
  declarations: [PacientesPesquisaComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PACIENTE_ROUTES)
  ]
})
export class PacienteModule { }
