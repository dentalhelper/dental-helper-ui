import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { ToastService } from 'src/app/core/services/toast.service';
import { PacienteService } from 'src/app/core/services/paciente.service';

import { ConfirmationService } from 'primeng/api';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { OdontogramaResumoDTO } from 'src/app/domains/dtos/odontograma-resumo.dto';
import { DenteOdontogramaResumoDTO } from 'src/app/domains/dtos/dente-odontograma-resumo.dto';

@Component({
  selector: 'app-odontograma',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.scss'],
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
export class OdontogramaComponent implements OnInit {

  codigPaciente: number;
  activeTab = 'pronto';
  odontograma: OdontogramaResumoDTO;
  exibirInformacao = false;
  denteSelecionado: DenteOdontogramaResumoDTO;
  y;
  x;

  dentesTop: any[] = [];

  dentesBot: any[] = [];

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (event.target.className === 'grid__container__dentes__image') {
      this.exibirInformacao = true;
    } else {
      this.exibirInformacao = false;
    }
  }

  constructor(
    private title: Title,
    private router: Router,
    private eRef: ElementRef,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private pacienteService: PacienteService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.codigPaciente = this.route.snapshot.parent.params['codigo'];
    this.carregarOdontograma(this.codigPaciente);
  }

  carregarOdontograma(codigo: number) {
    this.pacienteService.buscarOdontograma(codigo)
      .subscribe((response: OdontogramaResumoDTO) => {
        this.odontograma = response;
        const dentes = response.dentes;
        dentes.forEach((dente) => {
          if (dente.numero <= 28) {
            this.dentesTop.push(dente);
          } else {
            this.dentesBot.push(dente);
          }
        });
      });
  }

  verificarStatusDoDente(dente: DenteOdontogramaResumoDTO): any {
    if (!this.temTratamento(dente.status)) {
      return dente.numero;
    } else if (dente.status === 2) {
      return dente.numero + 'a';
    } else if (dente.status === 3) {
      return dente.numero + 'f';
    }
  }

  temTratamento(statusDente: number): boolean {
    return statusDente === 1 ? false : true;
  }

  alterarOdontograma() {

  }

  exibirInformacoes(event, denteSelecionado, y) {
    this.exibirInformacao = false;
    this.exibirInformacao = this.exibirInformacao ? false : true;
    this.x = event.x + 'px';
    this.y = y;
    this.denteSelecionado = denteSelecionado;
  }
}
