import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, CurrencyPipe } from '@angular/common';

import { BadgeComponent } from './badge/badge.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ChartModule } from 'primeng/chart';
import { CorStatusAgendamentoPipe } from '../pipes/cor-status-agendamento.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BadgeComponent,
    DashboardComponent,
    CorStatusAgendamentoPipe,
  ],
  imports: [
    CommonModule,
    ChartModule,
    SharedModule,
  ],
  providers: [DecimalPipe, CurrencyPipe]
})
export class DashboardModule { }
