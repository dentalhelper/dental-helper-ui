import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { EstadoService } from 'src/app/core/services/estado.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { pt_BR } from 'src/app/shared/constants/calendario.br';
import { RadioOption } from 'src/app/shared/radio/radio-option.model';
import { EMAIL_PATTERN } from 'src/app/shared/constants/validators.regex';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { tap } from 'rxjs/operators';
import { UsuarioNovoDTO } from 'src/app/domains/dtos/usuario-novo.dto';


declare var $: any;
@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {


  pt_BR = pt_BR;
  edicao = false;
  formulario: FormGroup;
  nomeToastSucesso: string;
  codigo: any;

  estadosOptions = [];
  cidadesOptions = [];

  sexoOptions: RadioOption[] = [
    { label: 'Feminino', value: 1 },
    { label: 'Masculino', value: 2 }
  ];

  estadoCivilOptions = [
    { label: 'Solteiro', value: 1 },
    { label: 'Casado', value: 2 },
    { label: 'Viúvo', value: 3 },
    { label: 'Separado', value: 4 },
    { label: 'Divorciado', value: 5 }
  ];

  tipoOptions = [
    { label: 'Administrador', value: 1 },
    { label: 'Assistente', value: 2 },
    { label: 'Recepcionista', value: 3 }
  ];

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const senha = group.get('senha');
    const senhaConfirmacao = group.get('senhaconfirm');
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
    private estadoService: EstadoService,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.prepararFormulario();
    this.title.setTitle('Novo Usuário');
    this.carregarEstados();
    const codigUsuario = this.route.snapshot.params['codigo'];
    if (codigUsuario) {
      this.edicao = true;
      this.codigo = codigUsuario;
      this.formulario.get('senhaconfirm').setValue('******');
      this.formulario.get('codigoCidade').enable();
      this.carregarUsuarioPeloCodigo(codigUsuario);
    }
  }

  prepararFormulario() {
    this.formulario = new FormGroup(
      {
        nome: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        dataNascimento: new FormControl('', {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        cPF: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
        rG: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        estadoCivil: new FormControl('', Validators.required),
        sexo: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.pattern(EMAIL_PATTERN), Validators.required]),
        telefonePrincipal: new FormControl(''),
        telefone2: new FormControl(''),
        logradouro: new FormControl('', [Validators.required, Validators.minLength(3)]),
        numero: new FormControl('', Validators.required),
        bairro: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        cep: new FormControl('', Validators.required),
        complemento: new FormControl(''),
        tipo: new FormControl(''),
        codigoEstado: new FormControl(''),
        login: new FormControl('', Validators.required),
        senha: new FormControl('', Validators.required),
        senhaconfirm: new FormControl('', {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        codigoCidade: new FormControl({ value: '', disabled: true }, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
      },
      {
        updateOn: 'blur',
        validators: [UsuarioCadastroComponent.equalsTo]
      }
    );
  }



  submeterFormulario() {
    if (this.codigo) {
      this.atualizar();
    } else {
      this.salvar();
    }
  }

  salvar() {
    const form = this.formulario.value;
    delete form['senhaconfirm'];
    delete form['codigoEstado'];
    this.usuarioService.salvar(form)
      .pipe(
        tap((response: string) => {
          this.nomeToastSucesso = response;
        })
      )
      .subscribe(() => {
        this.voltar();
        const mensagemToast = `"Usuário para ${this.nomeToastSucesso}" foi criado."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  atualizar() {
    const form = this.formulario.value;
    delete form['senhaconfirm'];
    delete form['codigoEstado'];
    this.usuarioService.atualizar(form, this.codigo)
      .subscribe(() => {
        const mensagemToast = `"O Usuário foi atualizado."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  carregarUsuarioPeloCodigo(codigo: number) {
    this.usuarioService.buscarPorCodigo(codigo)
      .subscribe((response) => {
        this.formulario.patchValue(response);
        this.atualizarTituloDaPagina();
        this.carregarEstadoDoUsuario();

      });
  }

  carregarEstadoDoUsuario() {
    this.estadoService.pesquisar().subscribe((response) => {
      response.forEach((estado) => {
        this.estadoService.pesquisarCidades(estado.codigo).subscribe((cidadeResponse) => {
          cidadeResponse.forEach((cidade) => {
            if (cidade.codigo === this.formulario.get('codigoCidade').value) {
              this.carregarCidades(estado.codigo);
              this.formulario.get('codigoEstado').setValue(estado.codigo);
            }
          });
        });
      });
    });
  }

  voltar() {
    this.router.navigate(['/usuarios'], {
      relativeTo: this.route
    });
  }

  carregarEstados() {
    this.estadoService.pesquisar().subscribe((response) => {
      this.estadosOptions = response.map(estado => ({
        value: estado.codigo, label: estado.nome
      }));
    });
  }

  carregarCidades(codigoEstado: number) {
    this.formulario.get('codigoCidade').enable();
    this.estadoService.pesquisarCidades(codigoEstado).subscribe((response) => {
      this.cidadesOptions = response.map(cidade => ({
        value: cidade.codigo, label: cidade.nome
      }));
    });
  }

  atualizarTituloDaPagina() {
    this.title.setTitle(`Editando: ${this.formulario.get('nome').value}`);
  }

  get isEditando(): boolean {
    return this.edicao;
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }
}
