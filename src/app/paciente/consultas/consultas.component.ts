import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { ToastService } from 'src/app/core/services/toast.service';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { AgendamentoService } from 'src/app/core/services/agendamento.service';
import { PacienteAgendamentoDTO } from 'src/app/domains/dtos/paciente-agendamento.dto';
import { AgendamentoResumoPacienteDTO } from 'src/app/domains/dtos/agendamento-resumo-paciente.dto';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss'],
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
export class ConsultasComponent implements OnInit {

  activeTab = 'pronto';
  codigPaciente: number;

  consultas: PacienteAgendamentoDTO;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private pacienteService: PacienteService,
    private agendamentoService: AgendamentoService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.codigPaciente = this.route.snapshot.parent.params['codigo'];
    this.carregarConsultas();
  }

  agendarConsulta() {
    this.router.navigate(['agendamentos/novo']);
  }

  deletar(codigoConsulta: any) {
    this.agendamentoService.deletar(codigoConsulta)
      .subscribe(() => {
        this.carregarConsultas();
        const mensagemToast = `"O Agendamento foi excluído."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  confirmarExclusao(consulta: AgendamentoResumoPacienteDTO) {
    this.confirmationService.confirm({
      message: `Você tem certeza que quer excluir este agendamento?`,
      accept: () => {
        this.deletar(consulta.codigoAgendamento);
      }
    });
  }

  carregarConsultas() {
    this.pacienteService.buscarConsultas(this.codigPaciente)
      .subscribe((response) => {
        this.consultas = response;
        this.atualizarTituloDaPagina();

      });
  }

  atualizarTituloDaPagina() {
    this.title.setTitle(`Consultas`);
  }

  definirCorBadge(statusAgendamento: string): string {
    switch (statusAgendamento) {
      case 'Agendado': {
        return '#116FBF';
      }
      case 'Confirmado': {
        return '#cda86f';
      }
      case 'Finalizado': {
        return '#56a83b';
      }
      case 'Faltou': {
        return '#505050';
      }
      case 'Cancelado': {
        return '#df1616';
      }
    }
  }
}
