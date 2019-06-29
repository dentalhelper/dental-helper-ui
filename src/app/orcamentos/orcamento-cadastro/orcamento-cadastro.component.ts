import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ToastService } from 'src/app/core/services/toast.service';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { ProcedimentoService } from 'src/app/core/services/procedimento.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { pt_BR } from 'src/app/shared/constants/calendario.br';
import { Procedimento } from 'src/app/domains/procedimento.model';
import { OrcamentoService } from 'src/app/core/services/orcamento.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

declare var $: any;
@Component({
  selector: 'app-orcamento-cadastro',
  templateUrl: './orcamento-cadastro.component.html',
  styleUrls: ['./orcamento-cadastro.component.scss'],
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
              opacity: 0.8,
              transform: 'translateX(-10px)',
              offset: 0.2
            }),
            style({
              opacity: 0,
              transform: 'translateX(30px)',
              offset: 1
            })
          ]))
      )
    ])
  ]
})
export class OrcamentoCadastroComponent implements OnInit, AfterContentInit {

  estadoDoItem = 'pronto';
  pt_BR = pt_BR;
  edicao = false;
  procedimentos: Procedimento[] = [];
  codigoOrcamento: number;
  items: FormArray;
  aprovadoOpcoes = [
    { label: 'Sim', value: true },
    { label: 'Não', value: false }
  ];
  procedimentosOptions = [];
  total = 0;

  formulario: FormGroup;

  constructor(
    private title: Title,
    private location: Location,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private pacienteService: PacienteService,
    private orcamentoService: OrcamentoService,
    private procedimentoService: ProcedimentoService,
  ) { }

  ngOnInit() {
    this.title.setTitle('Novo Orçamento');
    this.prepararFormulario();
    this.carregarProcedimentos();

    const codigoOrcamento = this.route.snapshot.params['codigo'];

    if (codigoOrcamento) {
      this.edicao = true;
      this.codigoOrcamento = codigoOrcamento;
      this.carregarOrcamento(codigoOrcamento);
    } else {
      this.adicionarProcedimento();
    }
  }

  ngAfterContentInit(): void {
    this.route.fragment.subscribe((codPaciente) => {
      if (codPaciente) {
        this.formulario.get('codPaciente').setValue(codPaciente);
      }
    });
  }

  prepararFormulario() {
    this.formulario = new FormGroup({
      aprovado: new FormControl(false),
      codPaciente: new FormControl(''),
      desconto: new FormControl({ value: 0, disabled: true }, {
        updateOn: 'change'
      }
      ),
      valorTotal: new FormControl(null, [this.validarValorPositivo]),
      procedimentos: this.formBuilder.array([], Validators.required)
    },
      {
        updateOn: 'blur'
      });
  }

  validarValorPositivo(input: FormControl) {
    return (input.value >= 0 ? null : { valorPositivo: true });
  }

  get formData() {
    return <FormArray>this.formulario.get('procedimentos');
  }

  submeterFormulario() {
    if (this.isEditando) {
      this.atualizar();
    } else {
      this.salvar();
    }
  }

  salvar() {
    this.orcamentoService.salvar(this.formulario.value)
      .subscribe(() => {
        this.voltar();
        const mensagemToast = `"Orçamento salvo."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  atualizar() {
    this.orcamentoService.atualizar(this.codigoOrcamento, this.formulario.value)
      .subscribe(() => {
        this.voltar();
        const mensagemToast = `O Orçamento foi atualizado.`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  adicionarProcedimento(): void {
    this.items = this.formulario.get('procedimentos') as FormArray;
    this.items.push(this.criarItemDeProcedimento());
  }

  removerProcedimento(index: number) {
    if (index === 0 && this.items.length === 1) {
      this.formulario.get('desconto').disable();
      this.formulario.get('desconto').setValue('');
    }
    this.items.removeAt(index);
    this.calcularTotal();
  }

  criarItemDeProcedimento(): FormGroup {
    return this.formBuilder.group({
      codigo: new FormControl('', Validators.required),
      valor: new FormControl(null),
    },
      {
        updateOn: 'change'
      });
  }

  carregarOrcamento(codigo: number) {
    this.orcamentoService.buscarPorCodigo(codigo)
      .subscribe((response) => {
        response.procedimentos.forEach(() => {
          this.adicionarProcedimento();
        });

        // TODO: RESOLVER REFERENCIA DO PROCEDIMENTO
        for (let index = 0; index < this.items.length; index++) {
          this.items.at(index).get('valor').setValue(response.procedimentos[index].valor);
        }
        this.formulario.patchValue(response);

        this.calcularTotal(); // TODO: RESOLVER REFERENCIA DO PROCEDIMENTO

        this.atualizarTituloDaPagina();
        this.formulario.get('desconto').enable();
      });
  }

  carregarProcedimentos() {
    this.procedimentoService.pesquisar('').subscribe(response => {
      this.procedimentosOptions = response.map(elemento =>
        ({
          value: elemento.codigo,
          label: elemento.nome,
          valor: elemento.valorBase
        }));
      this.procedimentos = response;
    });
  }

  aplicarValor(codigoProcedimento: any, formIndex: any) {
    const procedimento = this.procedimentos.find((elemento) => {
      return elemento.codigo === codigoProcedimento;
    });
    this.items.at(formIndex).get('valor').setValue(procedimento.valorBase);
    this.formulario.get('desconto').enable();
    this.calcularTotal();
  }

  aplicarDesconto() {
    this.calcularTotal();

  }

  voltar() {
    this.location.back();
  }

  isValor(): boolean {
    return this.total === 0;
  }

  calcularTotal() {
    this.total = 0;
    for (let index = 0; index < this.items.length; index++) {
      this.total += this.items.at(index).get('valor').value;
    }
    if (this.formulario.get('desconto').value >= 0) {
      this.total -= this.formulario.get('desconto').value;
    }
    this.formulario.get('valorTotal').setValue(this.total);
  }

  temValor(index): boolean {
    return (this.items.at(index).get('valor').value !== null);
  }

  atualizarTituloDaPagina() {
    this.title.setTitle(`Editando Orçamento`);
  }

  get isEditando(): boolean {
    return this.edicao;
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }

}
