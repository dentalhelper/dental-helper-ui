import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesPesquisaComponent } from './pacientes-pesquisa/pacientes-pesquisa.component';
import { RouterModule } from '@angular/router';
import { PACIENTE_ROUTES } from './pacientes.routes';

@NgModule({
  declarations: [PacientesPesquisaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PACIENTE_ROUTES)
  ]
})
export class PacienteModule { }
