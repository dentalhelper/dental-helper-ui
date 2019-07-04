import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ODONTOGRAMA_ROUTES } from './odontograma.routes';
import { OdontogramaEditComponent } from './odontograma-edit/odontograma-edit.component';

import { ListboxModule } from 'primeng/listbox';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  declarations: [OdontogramaEditComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ListboxModule,
    SelectButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ODONTOGRAMA_ROUTES)
  ]
})
export class OdontogramaModule { }
