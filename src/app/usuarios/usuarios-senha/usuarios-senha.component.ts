import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { ToastService } from 'src/app/core/services/toast.service';
import { UsuarioNovoDTO } from 'src/app/domains/dtos/usuario-novo.dto';
import { UsuarioService } from 'src/app/core/services/usuario.service';

declare var $: any;

@Component({
  selector: 'app-usuarios-senha',
  templateUrl: './usuarios-senha.component.html',
  styleUrls: ['./usuarios-senha.component.scss']
})
export class UsuariosSenhaComponent implements OnInit {

  formulario: FormGroup;
  codigoUsuario: number;
  nomeUsuario: string;

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const senha = group.get('novaSenha');
    const senhaConfirmacao = group.get('confirmacaoDeSenhaAtual');
    if (!senha || !senhaConfirmacao) {
      return undefined;
    }

    if (senha.value !== senhaConfirmacao.value) {
      return { senhaDiferente: true };
    }
    return undefined;
  }

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private usuarioService: UsuarioService,
  ) { }


  ngOnInit() {
    this.codigoUsuario = this.route.snapshot.params['codigo'];
    this.buscarNomeUsuario(this.codigoUsuario);
    this.prepararFormulario();
  }

  prepararFormulario() {
    this.formulario = new FormGroup(
      {
        confirmacaoDeSenhaAtual: new FormControl('', {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        novaSenha: new FormControl('', [Validators.required, Validators.minLength(6)]),
        senhaAtual: new FormControl('', [Validators.required]),
      },
      {
        updateOn: 'blur',
        validators: [UsuariosSenhaComponent.equalsTo]
      }
    );
  }

  salvar() {
    const form = this.formulario.value;
    delete form['confirmacaoDeSenhaAtual'];
    this.usuarioService.alterarSenha(form, this.codigoUsuario)
      .subscribe(() => {
        this.voltar();
        const mensagemToast = `A senha de ${this.nomeUsuario} foi alterada!`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  buscarNomeUsuario(codigoUsuario: number) {
    this.usuarioService.buscarPorCodigo(codigoUsuario)
      .subscribe((usuario: UsuarioNovoDTO) => {
        this.nomeUsuario = usuario.nome;
        this.title.setTitle(`Alterando senha de ${this.nomeUsuario}`);
      });
  }

  voltar() {
    this.router.navigate(['/usuarios'], {
      relativeTo: this.route
    });
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }
}
