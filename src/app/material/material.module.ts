import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MATERIAL_ROUTES } from './materiais.routes';
import { MateriaisPesquisaComponent } from './materiais-pesquisa/materiais-pesquisa.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MATERIAL_ROUTES)
  ],
  declarations: [MateriaisPesquisaComponent]
})
export class MaterialModule { }
