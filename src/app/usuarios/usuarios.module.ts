import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { USUARIO_ROUTES } from './usuarios.routes';
import { SharedModule } from '../shared/shared.module';
import { StatusUsuarioPipe } from '../pipes/status-usuario.pipe';
import { UsuariosSenhaComponent } from './usuarios-senha/usuarios-senha.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuariosPesquisaComponent } from './usuarios-pesquisa/usuarios-pesquisa.component';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    StatusUsuarioPipe,
    UsuariosSenhaComponent,
    UsuarioCadastroComponent,
    UsuariosPesquisaComponent,
  ],
  imports: [
    TableModule,
    FormsModule,
    CommonModule,
    SharedModule,
    TooltipModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    CurrencyMaskModule,
    SelectButtonModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(USUARIO_ROUTES)
  ]
})
export class UsuariosModule { }

