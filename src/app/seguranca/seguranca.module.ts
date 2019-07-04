import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SEGURANCA_ROUTES } from './seguranca.routes';
import { LoginComponent } from './login/login.component';
import { environment } from '../../environments/environment';

import { InputTextModule } from 'primeng/inputtext';

import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    }),
    RouterModule.forChild(SEGURANCA_ROUTES)
  ],
  providers: []
})
export class SegurancaModule { }
