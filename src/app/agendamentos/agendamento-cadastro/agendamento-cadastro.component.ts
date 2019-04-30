import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { EMAIL_PATTERN } from 'src/app/shared/constants/validators.regex';
import { NO_IMAGE_URL } from 'src/app/shared/constants/image.defeut';
import { pt_BR } from 'src/app/shared/constants/calendario.br';
import { RadioOption } from 'src/app/shared/radio/radio-option.model';
import { EstadoService } from 'src/app/core/services/estado.service';
import { tap } from 'rxjs/operators';
import { ToastService } from 'src/app/core/services/toast.service';
import { ProcedimentoService } from 'src/app/core/services/procedimento.service';
import { AgendamentoService } from 'src/app/core/services/agendamento.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

declare var $: any;
@Component({
  selector: 'app-agendamento-cadastro',
  templateUrl: './agendamento-cadastro.component.html',
  styleUrls: ['./agendamento-cadastro.component.scss'],
  animations: [
    trigger('linha', [
      state('pronto', style({
        opacity: 1
      })),
      transition('void => pronto',
        animate('300ms 0s ease-in',
          keyframes([
            style({
              opacity: 0,
              transform: 'translateX(-30px)',
              offset: 0
            }),
            style({
              opacity: 0.5,
              transform: 'translateX(-20px)',
              offset: 0.5
            }),
            style({
              opacity: 0.8,
              transform: 'translateX(-10px)',
              offset: 0.8
            }),
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 1
            })
          ]))
      ),
      transition('pronto => void',
        animate('300ms 0s ease-out',
          keyframes([
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 0
            }),
            style({
              opacity: 0.6,
              transform: 'translateX(-10px)',
              offset: 0.2
            }),
            style({
              opacity: 0.2,
              transform: 'translateX(130px)',
              offset: 0.5
            }),
            style({
              opacity: 0,
              transform: 'translateY(0px)',
              offset: 1
            })
          ]))
      )
    ])
  ]
})
export class AgendamentoCadastroComponent implements OnInit {

  activeTab = 'pronto';
  formulario: FormGroup;
  formularioDePaciente: FormGroup;
  pacientes = [];
  procedimentos = [];
  nome: string;
  selecionado: string;
  sidebar: boolean;
  pt_BR = pt_BR;

  estadosOptions = [];
  cidadesOptions = [];

  estadoCivilOptions = [
    { label: 'Solteiro', value: 1 },
    { label: 'Casado', value: 2 },
    { label: 'Viúvo', value: 3 },
    { label: 'Separado', value: 4 },
    { label: 'Divorciado', value: 5 }
  ];

  sexoOptions: RadioOption[] = [
    { label: 'Feminino', value: 1 },
    { label: 'Masculino', value: 2 }
  ];

  constructor(
    private title: Title,
    private location: Location,
    private toastService: ToastService,
    private estadoService: EstadoService,
    private pacienteService: PacienteService,
    private agendamentoService: AgendamentoService,
    private procedimentoService: ProcedimentoService
  ) { }

  ngOnInit() {
    this.carregarEstados();
    this.prepararFormulario();
    this.prepararFormularioDePaciente();
    this.carregarPacientes();
    this.carregarProcedimentos();
    this.title.setTitle('Nova Despesa');
  }

  prepararFormulario() {
    this.formulario = new FormGroup({
      codigoPaciente: new FormControl('', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      dataAgendamento: new FormControl('', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      horaInicio: new FormControl('', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      horaFim: new FormControl(''),
      codigoProcedimento: new FormControl('', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      primeiraAvalicao: new FormControl(false),
      observacao: new FormControl('')
    },
      {
        updateOn: 'blur'
      });
  }

  prepararFormularioDePaciente() {
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
        telefonePrincipal: new FormControl('', Validators.required),
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
    this.agendamentoService.salvar(this.formulario.value)
      .subscribe(() => {
        const mensagemToast = `Consulta agendada!`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  carregarPacientes() {
    this.pacienteService.buscarComFotoParaSelect()
      .subscribe((response) => {
        this.pacientes = response.map(elemento =>
          ({
            value: elemento.codigo,
            label: elemento.nome,
            image: elemento.urlDaFoto
          })
        );
      });
  }

  pacienteSelecionado(event) {
    this.selecionado = undefined;
    this.pacienteService.buscarPorCodigo(event)
      .subscribe((response) => {
        this.selecionado = response.urlDaFoto;
      });
  }
  carregarProcedimentos() {
    this.procedimentoService.pesquisar('')
      .subscribe((response) => {
        this.procedimentos = response.map(elemento => ({
          value: elemento.codigo,
          label: elemento.nome
        }));
      });
  }

  novoPaciente() {
    this.sidebar = true;
  }

  salvarPaciente() {
    this.pacienteService.salvar(this.formularioDePaciente.value)
      .pipe(
        tap((response: string) => {
          this.nome = response;
        })
      )
      .subscribe(() => {
        const mensagemToast = `"${this.nome}" foi salvo(a)."`;
        this.sidebar = false;
        this.toastService.exibirSucesso(mensagemToast);
        this.formularioDePaciente.reset();
        this.carregarPacientes();
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

  voltar() {
    this.location.back();
  }

  get isEditando(): boolean {
    // TODO: iseditando
    return false;
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }
}
