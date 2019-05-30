import { Component, OnInit, AfterContentInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { OrcamentoPagamentoDTO } from 'src/app/domains/dtos/orcamento-pagamento.dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pt_BR } from 'src/app/shared/constants/calendario.br';
import { RecebimentosService } from 'src/app/core/services/recebimentos.service';
import { ConfirmationService } from 'primeng/api';
import { OrcamentoService } from 'src/app/core/services/orcamento.service';

declare var $: any;
@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.scss'],
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
export class PagamentosComponent implements OnInit, AfterContentInit {

  activeTab = 'pronto';
  formulario: FormGroup;
  pt_BR = pt_BR;

  exibirModal: boolean;
  pagamentoModal: OrcamentoPagamentoDTO;

  valorPago = 0;
  valorEmAberto = 0;
  valorTotal = 0;

  pagamentos: any[];
  codigPaciente: any;

  pagamentoOptions: any[] = [
    { label: 'Pagamento Total', value: 1 },
    { label: 'Pagamento Parcial', value: 2 }
  ];

  formasDePagamento = [
    { label: 'Dinheiro', value: 1, icon: 'fa fa-fw fa-money-bill' },
    { label: 'Cartão', value: 2, icon: 'fa fa-fw fa-credit-card' }
  ];

  opcaoDePagamento = 1;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private pacienteService: PacienteService,
    private orcamentoService: OrcamentoService,
    private recebimentoService: RecebimentosService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.title.setTitle('Pagamentos');
    this.codigPaciente = this.route.snapshot.parent.params['codigo'];
    this.prepararFormulario();

  }

  ngAfterContentInit(): void {
    this.carregarPagamentos();
  }

  prepararFormulario() {
    this.formulario = new FormGroup({
      valor: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dataPagamento: new FormControl(new Date(), {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      forma: new FormControl(1),
      codOrcamento: new FormControl('')
    });
  }

  alterarModoPagamento() {
    this.formulario.get('valor').setValue('');
  }

  abrirModalPagamento(pagamentoSelecionado: OrcamentoPagamentoDTO) {
    this.pagamentoModal = pagamentoSelecionado;
    this.exibirModal = true;
  }

  salvarPagamento() {
    this.formulario.get('codOrcamento').setValue(this.pagamentoModal.codigoOrcamento);
    if (this.opcaoDePagamento === 1) {
      this.formulario.get('valor').setValue(this.pagamentoModal.valorEmAberto);
    }

    this.recebimentoService.salvar(this.formulario.value)
      .subscribe(() => {
        const mensagemToast = `"O pagamento foi registrado."`;
        this.toastService.exibirSucesso(mensagemToast);
        this.carregarPagamentos();
        this.fecharModal();
        this.prepararFormulario();
      });
  }

  confirmarCancelamento(codigoOrcamento: number) {
    this.confirmationService.confirm({
      header: `Cancelar Pagamento.`,
      message: `Você tem certeza que quer cancelar este pagamento?
      <br/>
      <br/>
      Essa operação é irreversível`,
      accept: () => {
        this.cancelarPagamento(codigoOrcamento);
      }
    });

  }

  cancelarPagamento(codigoOrcamento: number) {
    this.orcamentoService.cancelar(codigoOrcamento)
      .subscribe(() => {
        const mensagemToast = `"O pagamento foi cancelado."`;
        this.toastService.exibirSucesso(mensagemToast);
        this.carregarPagamentos();
        this.fecharModal();
        this.prepararFormulario();
      });
  }

  fecharModal() {
    this.opcaoDePagamento = 1;
    this.exibirModal = false;
  }

  resetarFormulario() {
    this.opcaoDePagamento = 1;
    this.prepararFormulario();
  }

  visualizar() {

    const mensagemToast = `"Operação não implementada"`;
        this.toastService.exibirAviso(mensagemToast);
  }

  carregarPagamentos() {
    this.resetarBadges();
    this.pacienteService.buscarPagamentos(this.codigPaciente).subscribe((response) => {
      response.forEach(pagamento => {
        if (pagamento.statusPagamento === 2) {
          this.valorPago += pagamento.valorPago;
        }
        if (pagamento.statusPagamento === 1) {
          this.valorEmAberto += pagamento.valorEmAberto;
        }
      });
      this.valorTotal = this.valorPago + this.valorEmAberto;
      this.pagamentos = response;
    });
  }

  resetarBadges() {
    this.valorTotal = 0;
    this.valorPago = 0;
    this.valorEmAberto = 0;
  }

  isMobile(): boolean {
    return $.browser.mobile;
  }
}
