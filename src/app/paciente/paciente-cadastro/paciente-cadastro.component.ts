import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { pt_BR } from 'src/app/shared/constants/calendario.br';
import { ToastService } from 'src/app/core/services/toast.service';
import { NO_IMAGE_URL } from 'src/app/shared/constants/image.defeut';
import { EstadoService } from 'src/app/core/services/estado.service';
import { RadioOption } from 'src/app/shared/radio/radio-option.model';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { EMAIL_PATTERN } from 'src/app/shared/constants/validators.regex';

import { tap } from 'rxjs/operators';

declare var $: any;
@Component({
  selector: 'app-paciente-cadastro',
  templateUrl: './paciente-cadastro.component.html',
  styleUrls: ['./paciente-cadastro.component.scss']
})
export class PacienteCadastroComponent implements OnInit {

  pt_BR = pt_BR;
  formularioDePaciente: FormGroup;
  nome: string;
  uploadEmAndamento = false;

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

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private estadoService: EstadoService,
    private pacienteService: PacienteService,
  ) { }

  ngOnInit() {
    this.prepararFormulario();
    this.title.setTitle('Novo Paciente');
    this.carregarEstados();
  }

  prepararFormulario() {
    this.formularioDePaciente = new FormGroup(
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
        email: new FormControl('', [Validators.pattern(EMAIL_PATTERN)]),
        profissao: new FormControl('', Validators.required),
        fotoPerfil: new FormControl(''),
        urlDaFoto: new FormControl(NO_IMAGE_URL),
        telefonePrincipal: new FormControl(''),
        telefone2: new FormControl(''),
        logradouro: new FormControl('', [Validators.required, Validators.minLength(3)]),
        numero: new FormControl('', Validators.required),
        bairro: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        cep: new FormControl('', Validators.required),
        complemento: new FormControl(''),
        codigoCidade: new FormControl('', {
          updateOn: 'change',
          validators: [Validators.required]
        }),
      },
      {
        updateOn: 'blur'
      }
    );
  }

  submeterFormulario() {
    this.salvar();
  }

  salvar() {
    this.pacienteService.salvar(this.formularioDePaciente.value)
      .pipe(
        tap((response: string) => {
          this.nome = response;
        })
      )
      .subscribe(() => {
        this.voltar();
        const mensagemToast = `"${this.nome}" foi salvo(a)."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  voltar() {
    this.router.navigate(['/pacientes'], {
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
    this.estadoService.pesquisarCidades(codigoEstado).subscribe((response) => {
      this.cidadesOptions = response.map(cidade => ({
        value: cidade.codigo, label: cidade.nome
      }));
    });
  }

  onBeforeSendImage() {
    this.uploadEmAndamento = true;
  }

  aoEnviarImagem(event: any) {
    const foto = event.body;
    this.formularioDePaciente.patchValue({
      fotoPerfil: foto.nome,
      urlDaFoto: foto.uri
    });
    this.uploadEmAndamento = false;
  }

  aoFalharEnvioDeImagem(event: any) {
    event.clear();
    this.uploadEmAndamento = false;
  }

  removerImagem() {
    this.formularioDePaciente.patchValue({
      fotoPerfil: null,
      urlDaFoto: NO_IMAGE_URL
    });
  }

  get urlUploadImagem() {
    return this.pacienteService.urlUploadImagem();
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }
}
