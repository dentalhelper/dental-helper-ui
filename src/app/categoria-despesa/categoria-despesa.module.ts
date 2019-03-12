import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoriaDespesaCadastroComponent } from './categoria-despesa-cadastro/categoria-despesa-cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriaDespesaPesquisaComponent } from './categoria-despesa-pesquisa/categoria-despesa-pesquisa.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
    CategoriaDespesaCadastroComponent,
    CategoriaDespesaPesquisaComponent]

})
export class CategoriaDespesaModule {

}
