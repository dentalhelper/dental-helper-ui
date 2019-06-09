import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastService } from 'src/app/core/services/toast.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-usuarios-pesquisa',
  templateUrl: './usuarios-pesquisa.component.html',
  styleUrls: ['./usuarios-pesquisa.component.scss']
})
export class UsuariosPesquisaComponent implements OnInit {

  usuarios: any[];

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private usuarioService: UsuarioService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.title.setTitle('Usuários');
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.pesquisar('').subscribe(resultado => {
      this.usuarios = resultado;
    });
  }

  criarUsuario() {
    this.router.navigate(['novo'], {
      relativeTo: this.route
    });
  }

  desativar(usuario: any) {
    const mensagemToast = `"Operação não implementada (via PATCH)"`;
    this.toastService.exibirAviso(mensagemToast);
  }

  alterarStatus(codigoUsuario: number) {
    this.usuarioService.alterarStatus(codigoUsuario)
      .subscribe((response) => {
        if (response.status) {
          this.toastService.exibirSucesso(`O usuário "${response.user}" está ativo.`);
        } else if (!response.status) {
          this.toastService.exibirAviso(`O usuário "${response.user}" foi desativado e não possui mais acesso ao sistema.`);
        }

        this.carregarUsuarios();
      });
  }
}
