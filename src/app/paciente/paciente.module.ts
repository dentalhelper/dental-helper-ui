import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CpfPipe } from '../pipes/cpf.pipe';
import { PACIENTE_ROUTES } from './pacientes.routes';
import { TelefonePipe } from '../pipes/telefone.pipe';
import { SharedModule } from '../shared/shared.module';
import { PacienteCadastroComponent } from './paciente-cadastro/paciente-cadastro.component';
import { PacientesPesquisaComponent } from './pacientes-pesquisa/pacientes-pesquisa.component';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { NgxMaskModule } from 'ngx-mask';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    CpfPipe,
    TelefonePipe,
    PacienteCadastroComponent,
    PacientesPesquisaComponent,
  ],
  imports: [
    TableModule,
    CommonModule,
    SharedModule,
    TooltipModule,
    DropdownModule,
    FieldsetModule,
    CalendarModule,
    InputMaskModule,
    FileUploadModule,
    SelectButtonModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(PACIENTE_ROUTES)
  ]
})
export class PacienteModule { }
