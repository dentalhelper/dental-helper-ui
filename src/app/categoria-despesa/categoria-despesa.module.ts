import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { CategoriaDespesaPesquisaComponent } from './categoria-despesa-pesquisa/categoria-despesa-pesquisa.component';
import { SharedModule } from '../shared/shared.module';

import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    TableModule,
    TooltipModule,
    ConfirmDialogModule,
    SharedModule
  ],
  declarations: [
    CategoriaDespesaPesquisaComponent
  ]
})
export class CategoriaDespesaModule { }
