import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AGENDAMENTO_ROUTES } from './agendamentos.routes';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { AgendamentoPesquisaComponent } from './agendamento-pesquisa/agendamento-pesquisa.component';

import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FullCalendarModule } from '@fullcalendar/angular';
import { InputTextareaModule } from 'primeng/inputtextarea';



import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AgendamentoCadastroComponent,
    AgendamentoPesquisaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SidebarModule,
    TooltipModule,
    DropdownModule,
    CalendarModule,
    OverlayPanelModule,
    FullCalendarModule,
    SelectButtonModule,
    ToggleButtonModule,
    InputTextareaModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(AGENDAMENTO_ROUTES)
  ]
})
export class AgendamentosModule { }
