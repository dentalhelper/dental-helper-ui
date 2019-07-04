import { Routes } from '@angular/router';

import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuariosPesquisaComponent } from './usuarios-pesquisa/usuarios-pesquisa.component';
import { UsuariosSenhaComponent } from './usuarios-senha/usuarios-senha.component';

export const USUARIO_ROUTES: Routes = [
  {
    path: '',
    component: UsuariosPesquisaComponent
  },
  {
    path: 'novo',
    component: UsuarioCadastroComponent
  },
  {
    path: ':codigo/edit',
    component: UsuarioCadastroComponent
  },
  {
    path: ':codigo/senha',
    component: UsuariosSenhaComponent
  }
];
