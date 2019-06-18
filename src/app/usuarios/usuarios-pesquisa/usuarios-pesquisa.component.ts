import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastService } from 'src/app/core/services/toast.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

import { ConfirmationService } from 'primeng/api';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuarios-pesquisa',
  templateUrl: './usuarios-pesquisa.component.html',
  styleUrls: ['./usuarios-pesquisa.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsuariosPesquisaComponent implements OnInit {

  usuarios: any[];
  formulario: FormGroup;
  exibirModal: boolean;
  usuarioModal: any;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private usuarioService: UsuarioService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.prepararFormulario();
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

  alterarSenha(){

  }

  prepararFormulario() {
    this.formulario = new FormGroup(
      {
        confirmacaoDeSenhaAtual: new FormControl('', Validators.required),
        novaSenha: new FormControl('', [Validators.required, Validators.minLength(6)]),
        senhaAtual: new FormControl('', [Validators.required, Validators.minLength(6)]),
      }
    );
  }

  fecharModal() {
    this.exibirModal = false;
  }

  resetarFormulario() {
    this.prepararFormulario();
  }

  abrirModalSenha(usuario) {
    this.prepararFormulario();
    this.usuarioModal = usuario;
    this.exibirModal = true;
  }
}
