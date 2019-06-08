import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AppHttp } from '../seguranca/app-http';
import { ToastService } from './services/toast.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastLinkComponent } from './toast-link/toast-link.component';
import { CategoriaDespesaService } from './services/categoria-despesa.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { JwtHelperService } from '@auth0/angular-jwt';
@NgModule({
  imports: [
    ToastModule,
    CommonModule,
    RouterModule,
    TooltipModule,
    ConfirmDialogModule
  ],
  declarations: [
    NavbarComponent,
    ToastLinkComponent,
    PageNotFoundComponent
  ],
  exports: [
    ToastModule,
    NavbarComponent,
    ToastLinkComponent
  ],
  providers: [
    Title,
    AppHttp,
    ToastService,
    JwtHelperService,
    ConfirmationService,
    CategoriaDespesaService,
  ]
})
export class CoreModule { }
