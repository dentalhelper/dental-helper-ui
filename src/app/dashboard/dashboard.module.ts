import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeComponent } from './badge/badge.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BadgeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
