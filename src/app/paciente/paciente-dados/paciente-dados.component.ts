import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { pt_BR } from 'src/app/shared/constants/calendario.br';
import { ToastService } from 'src/app/core/services/toast.service';
import { NO_IMAGE_URL } from 'src/app/shared/constants/image.defeut';
import { EstadoService } from 'src/app/core/services/estado.service';
import { RadioOption } from 'src/app/shared/radio/radio-option.model';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { EMAIL_PATTERN } from 'src/app/shared/constants/validators.regex';

declare var $: any;
@Component({
  selector: 'app-paciente-dados',
  templateUrl: './paciente-dados.component.html',
  styleUrls: ['./paciente-dados.component.scss']
})
export class PacienteDadosComponent implements OnInit {

  nome: string;
  pt_BR = pt_BR;
  codigPaciente: number;
  uploadEmAndamento = false;
  formularioDePaciente: FormGroup;

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
    private route: ActivatedRoute,
    private toastService: ToastService,
    private estadoService: EstadoService,
    private pacienteService: PacienteService,
  ) { }

  ngOnInit() {
    this.prepararFormulario();
    this.title.setTitle('Dados do Paciente');
    this.codigPaciente = this.route.snapshot.parent.params['codigo'];
    this.carregarPacientePeloCodigo(this.codigPaciente);
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
        urlDaFoto: new FormControl(''),
        telefonePrincipal: new FormControl(''),
        telefone2: new FormControl(''),
        logradouro: new FormControl('', [Validators.required, Validators.minLength(3)]),
        numero: new FormControl('', Validators.required),
        bairro: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        cep: new FormControl('', Validators.required),
        complemento: new FormControl(''),
        codigoEstado: new FormControl(''),
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
    this.atualizar();
  }

  atualizar() {
    delete this.formularioDePaciente.value.codigoEstado;
    this.pacienteService.atualizar(this.formularioDePaciente.value, this.codigPaciente)
      .subscribe(() => {
        const mensagemToast = `"O Paciente foi atualizado."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  carregarPacientePeloCodigo(codigo: number) {
    this.pacienteService.buscarPorCodigo(codigo)
      .subscribe((response) => {
        this.formularioDePaciente.patchValue(response);
        this.atualizarTituloDaPagina();
        this.carregarEstadoDoPaciente();
        if (!response.urlDaFoto) {
          this.formularioDePaciente.get('urlDaFoto').setValue(NO_IMAGE_URL);
          this.formularioDePaciente.get('fotoPerfil').setValue(null);
        }
      });
  }

  carregarEstadoDoPaciente() {
    this.estadoService.pesquisar().subscribe((response) => {
      response.forEach((estado) => {
        this.estadoService.pesquisarCidades(estado.codigo).subscribe((cidadeResponse) => {
          cidadeResponse.forEach((cidade) => {
            if (cidade.codigo === this.formularioDePaciente.get('codigoCidade').value) {
              this.carregarCidades(estado.codigo);
              this.formularioDePaciente.get('codigoEstado').setValue(estado.codigo);
            }
          });
        });
      });
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

  atualizarTituloDaPagina() {
    this.title.setTitle(`${this.formularioDePaciente.get('nome').value}`);
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }
}
