import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CategoriaDespesaService } from './services/categoria-despesa.service';
import { ToastService } from './services/toast.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [
    CategoriaDespesaService,
    ToastService
  ]
})
export class CoreModule { }
