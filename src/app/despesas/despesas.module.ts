import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesasPesquisaComponent } from './despesas-pesquisa/despesas-pesquisa.component';
import { RouterModule } from '@angular/router';
import { DESPESA_ROUTES } from './despesas.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DESPESA_ROUTES)
  ],
  declarations: [DespesasPesquisaComponent]
})
export class DespesasModule { }
