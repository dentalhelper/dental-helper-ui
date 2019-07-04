import { Routes } from '@angular/router';

import { MateriaisListaComponent } from './materiais-lista/materiais-lista.component';
import { MaterialCadastroComponent } from './material-cadastro/material-cadastro.component';
import { MateriaisPesquisaComponent } from './materiais-pesquisa/materiais-pesquisa.component';

export const MATERIAL_ROUTES: Routes = [
  {
    path: '',
    component: MateriaisPesquisaComponent
  },
  {
    path: 'novo',
    component: MaterialCadastroComponent
  },
  {
    path: 'lista',
    component: MateriaisListaComponent
  },
  {
    path: ':codigo/edit',
    component: MaterialCadastroComponent
  },

];
