import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { CategoriaDespesaService } from './services/categoria-despesa.service';
import { ToastService } from './services/toast.service';
import { ToastLinkComponent } from './toast-link/toast-link.component';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { Title } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    ConfirmDialogModule
  ],
  declarations: [
    NavbarComponent,
    ToastLinkComponent
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ToastLinkComponent
  ],
  providers: [
    CategoriaDespesaService,
    ToastService,
    ConfirmationService,
    Title
  ]
})
export class CoreModule { }
