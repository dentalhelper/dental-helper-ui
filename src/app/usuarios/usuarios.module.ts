import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { USUARIO_ROUTES } from './usuarios.routes';
import { UsuariosPesquisaComponent } from './usuarios-pesquisa/usuarios-pesquisa.component';

@NgModule({
  declarations: [
    UsuariosPesquisaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(USUARIO_ROUTES)
  ]
})
export class UsuariosModule { }

