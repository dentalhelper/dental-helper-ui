import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RgPipe } from '../pipes/rg.pipe';
import { CpfPipe } from '../pipes/cpf.pipe';
import { PACIENTE_ROUTES } from './pacientes.routes';
import { SharedModule } from '../shared/shared.module';
import { AnamneseComponent } from './anamnese/anamnese.component';
import { StatusPagamentoPipe } from '../pipes/status-pagamento.pipe';
import { ConsultasComponent } from './consultas/consultas.component';
import { ProntuarioComponent } from './prontuario/prontuario.component';
import { OrcamentosComponent } from './orcamentos/orcamentos.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { PacienteDadosComponent } from './paciente-dados/paciente-dados.component';
import { PacienteCadastroComponent } from './paciente-cadastro/paciente-cadastro.component';
import { PacientesPesquisaComponent } from './pacientes-pesquisa/pacientes-pesquisa.component';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { NgxMaskModule } from 'ngx-mask';
import { ShortenPipe } from '../pipes/shorten.pipe';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    RgPipe,
    CpfPipe,
    ShortenPipe,
    AnamneseComponent,
    ConsultasComponent,
    StatusPagamentoPipe,
    OrcamentosComponent,
    ProntuarioComponent,
    PagamentosComponent,
    PacienteDadosComponent,
    PacienteCadastroComponent,
    PacientesPesquisaComponent,
  ],
  imports: [
    TableModule,
    FormsModule,
    CommonModule,
    SharedModule,
    DialogModule,
    SidebarModule,
    TooltipModule,
    DropdownModule,
    FieldsetModule,
    CalendarModule,
    InputMaskModule,
    FileUploadModule,
    CurrencyMaskModule,
    SelectButtonModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(PACIENTE_ROUTES)
  ]
})
export class PacienteModule { }
