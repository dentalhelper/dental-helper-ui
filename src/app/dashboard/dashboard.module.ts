import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeComponent } from './badge/badge.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    DashboardComponent,
    BadgeComponent
  ],
  imports: [
    CommonModule,
    ChartModule
  ]
})
export class DashboardModule { }
