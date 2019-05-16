import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { ConfirmationService } from 'primeng/api';
import { OrcamentoService } from 'src/app/core/services/orcamento.service';
import { OrcamentoResumoDTO } from 'src/app/domains/dtos/orcamento-resumo.dto';
import { PacienteOrcamentoDTO } from 'src/app/domains/dtos/paciente-orcamento.dto';

@Component({
  selector: 'app-orcamentos',
  templateUrl: './orcamentos.component.html',
  styleUrls: ['./orcamentos.component.scss'],
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
export class OrcamentosComponent implements OnInit {

  activeTab = 'pronto';
  codigPaciente: any;

  orcamentos: OrcamentoResumoDTO[];

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private pacienteService: PacienteService,
    private orcamentoService: OrcamentoService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.codigPaciente = this.route.snapshot.parent.params['codigo'];
    this.carregarOrcamentos();
  }

  criarOrcamento() {
    this.router.navigate(['orcamentos/novo'], { fragment: this.codigPaciente });
  }

  carregarOrcamentos() {
    this.pacienteService.buscarOrcamentos(this.codigPaciente)
      .subscribe((response) => {
        this.orcamentos = response.orcamentos;
        this.atualizarTituloDaPagina();
      });
  }

  aprovar(codigoOrcamento: any) {
    this.orcamentoService.atualizarStatus(codigoOrcamento).subscribe(() => {
      this.carregarOrcamentos();
      const mensagemToast = `"O Orçamento foi Aprovado."`;
      this.toastService.exibirSucesso(mensagemToast);
    });
  }

  confirmarAprovacao(codigoOrcamento: any) {
    this.confirmationService.confirm({
      header: `Aprovar Orçamento.`,
      message: `Você tem certeza que quer aprovar este orçamento?
      <br/>
      <br/>
      Após aprovar os procedimentos ficarão disponíveis na área de "Procedimentos"`,
      accept: () => {
        this.aprovar(codigoOrcamento);
      }
    });

  }

  deletar(codigoOrcamento: any) {
    this.orcamentoService.deletar(codigoOrcamento)
      .subscribe(() => {
        this.carregarOrcamentos();
        const mensagemToast = `"O Orçamento foi excluído."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  confirmarExclusao(codigoOrcamento: any) {
    this.confirmationService.confirm({
      header: `Confirmar exclusão.`,
      message: `Você tem certeza que quer excluir este orçamento?`,
      accept: () => {
        this.deletar(codigoOrcamento);
      }
    });
  }

  atualizarTituloDaPagina() {
    this.title.setTitle(`Orçamentos`);
  }
}
