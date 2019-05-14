import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ORCAMENTO_ROUTES } from './orcamentos.routes';
import { OrcamentoCadastroComponent } from './orcamento-cadastro/orcamento-cadastro.component';

import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    OrcamentoCadastroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TooltipModule,
    DropdownModule,
    CalendarModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(ORCAMENTO_ROUTES)
  ]
})
export class OrcamentosModule { }
