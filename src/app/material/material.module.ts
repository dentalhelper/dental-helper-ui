import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MATERIAL_ROUTES } from './materiais.routes';
import { SharedModule } from '../shared/shared.module';
import { MateriaisListaComponent } from './materiais-lista/materiais-lista.component';
import { MaterialCadastroComponent } from './material-cadastro/material-cadastro.component';
import { MateriaisPesquisaComponent } from './materiais-pesquisa/materiais-pesquisa.component';

import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import { TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  imports: [
    FormsModule,
    TableModule,
    CommonModule,
    SharedModule,
    TooltipModule,
    ListboxModule,
    FieldsetModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    RouterModule.forChild(MATERIAL_ROUTES)
  ],
  declarations: [
    MateriaisListaComponent,
    MaterialCadastroComponent,
    MateriaisPesquisaComponent,
  ]
})
export class MaterialModule { }
