import { Component, OnInit } from '@angular/core';
import { transition, trigger, state, style, animate, keyframes } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { OrcamentoService } from 'src/app/core/services/orcamento.service';
import { ConfirmationService } from 'primeng/api';
import { ProcedimentoPrevistoResumoDTO } from 'src/app/domains/dtos/procedimento-previsto-resumo.dto';
import { ProcedimentoPrevistoService } from 'src/app/core/services/procedimento-previsto.service';

@Component({
  selector: 'app-procedimentos',
  templateUrl: './procedimentos.component.html',
  styleUrls: ['./procedimentos.component.scss'],
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
export class ProcedimentosComponent implements OnInit {

  activeTab = 'pronto';
  codigPaciente: any;
  procedimentos: ProcedimentoPrevistoResumoDTO[];

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private pacienteService: PacienteService,
    private orcamentoService: OrcamentoService,
    private confirmationService: ConfirmationService,
    private procedimentoPrevistoService: ProcedimentoPrevistoService
  ) { }

  ngOnInit() {
    this.codigPaciente = this.route.snapshot.parent.params['codigo'];
    this.carregarProcedimentos();
  }

  carregarProcedimentos() {
    this.pacienteService.buscarProcedimentos(this.codigPaciente)
      .subscribe((response) => {
        this.procedimentos = response.procedimentos;
        this.atualizarTituloDaPagina();
      });
  }

  mudarStatus(codigo) {
    this.procedimentoPrevistoService.atualizar(codigo.codigo)
      .subscribe(() => {
        const mensagemToast = `"O procedimento foi atualizado."`;
        this.toastService.exibirSucesso(mensagemToast);
        this.carregarProcedimentos();
      });
  }

  criarOrcamento() {
    this.router.navigate(['orcamentos/novo'], { fragment: this.codigPaciente });
  }

  atualizarTituloDaPagina() {
    this.title.setTitle(`Procedimentos`);
  }

}
