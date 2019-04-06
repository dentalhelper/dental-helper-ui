import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PACIENTE_ROUTES } from './pacientes.routes';
import { SharedModule } from '../shared/shared.module';
import { PacientesPesquisaComponent } from './pacientes-pesquisa/pacientes-pesquisa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TelefonePipe } from '../pipes/telefone.pipe';
import { CpfPipe } from '../pipes/cpf.pipe';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    PacientesPesquisaComponent,
    TelefonePipe,
    CpfPipe
  ],
  imports: [
    TableModule,
    CommonModule,
    SharedModule,
    TooltipModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    RouterModule.forChild(PACIENTE_ROUTES)
  ]
})
export class PacienteModule { }
