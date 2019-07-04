import { Routes } from '@angular/router';

import { OdontogramaEditComponent } from './odontograma-edit/odontograma-edit.component';

export const ODONTOGRAMA_ROUTES: Routes = [
  {
    path: ':codigo/edit',
    component: OdontogramaEditComponent
  }
];
