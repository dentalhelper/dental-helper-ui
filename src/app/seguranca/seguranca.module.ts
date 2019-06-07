import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SEGURANCA_ROUTES } from './seguranca.routes';
import { LoginComponent } from './login/login.component';

import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule.forChild(SEGURANCA_ROUTES)
  ]
})
export class SegurancaModule { }
