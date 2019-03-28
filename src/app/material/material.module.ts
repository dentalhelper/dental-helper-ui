import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MATERIAL_ROUTES } from './materiais.routes';
import { SharedModule } from '../shared/shared.module';
import { MateriaisPesquisaComponent } from './materiais-pesquisa/materiais-pesquisa.component';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MaterialCadastroComponent } from './material-cadastro/material-cadastro.component';

@NgModule({
  imports: [
    FormsModule,
    TableModule,
    CommonModule,
    SharedModule,
    TooltipModule,
    FieldsetModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    RouterModule.forChild(MATERIAL_ROUTES)
  ],
  declarations: [
    MateriaisPesquisaComponent,
    MaterialCadastroComponent
  ]
})
export class MaterialModule { }
