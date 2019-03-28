import { Routes } from '@angular/router';
import { MateriaisPesquisaComponent } from './materiais-pesquisa/materiais-pesquisa.component';
import { MaterialCadastroComponent } from './material-cadastro/material-cadastro.component';

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
    path: ':codigo/edit',
    component: MaterialCadastroComponent
  },

];
