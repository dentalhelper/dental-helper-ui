import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, HostListener, OnDestroy } from '@angular/core';

import { PacienteService } from 'src/app/core/services/paciente.service';
import { AgendamentoService } from 'src/app/core/services/agendamento.service';
import { AgendamentoResumoDTO } from 'src/app/domains/dtos/agendamento-resumo.dto';

import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timegridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-agendamento-pesquisa',
  templateUrl: './agendamento-pesquisa.component.html',
  styleUrls: ['./agendamento-pesquisa.component.scss'],
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
              transform: 'translateY(-20px)',
              offset: 0
            }),
            style({
              opacity: 0.8,
              transform: 'translateY(-10px)',
              offset: 0.8
            }),
            style({
              opacity: 1,
              transform: 'translateY(0px)',
              offset: 1
            })
          ]))
      ),
      transition('pronto => void',
        animate('200ms 0s ease-out',
          keyframes([
            style({
              opacity: 1,
              transform: 'translateY(0px)',
              offset: 0
            }),
            style({
              opacity: 0.8,
              transform: 'translateY(-10px)',
              offset: 0.5
            }),
            style({
              opacity: 0.2,
              transform: 'translateY(-20px)',
              offset: 1
            })
          ]))
      )
    ])
  ]
})
export class AgendamentoPesquisaComponent implements OnInit, OnDestroy {

  activeTab = 'pronto';

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  agendamentos: AgendamentoResumoDTO[] = [];
  codigoPaciente: number;
  codigoAgendamento: number;

  calendario = [];

  positionY;
  positionX;
  style;

  events;
  calendarPlugins = [dayGridPlugin, interactionPlugin, timegridPlugin, listPlugin];

  isOpen: boolean;

  constructor(
    private router: Router,
    private pacienteService: PacienteService,
    private agendamentoService: AgendamentoService
  ) {

  }

  scroll = (): void => {
    this.isOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isOpen = false;
  }

  ngOnInit() {
    this.carregarAgendamentos();
    this.configurarCalendario();
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  closeMenu() {
    this.isOpen = false;
  }

  criarConsulta() {
    this.router.navigate(['agendamentos/novo']);
  }

  carregarAgendamentos() {
    this.agendamentoService.pesquisar().subscribe((response) => {
      this.agendamentos = response;
      this.montarCalendario();
    });
  }

  montarCalendario() {
    this.calendario = this.agendamentos.map((elemento) => ({
      title: elemento.nomePaciente,
      start: `${elemento.dataAgendamento}T${elemento.horaInicio}`,
      end: `${elemento.dataAgendamento}T${elemento.horaFim}`,
      color: this.definirCor(elemento.statusAgendamento),
      groupId: elemento.codigoPaciente,
      id: elemento.codigoAgendamento
    }));
  }

  handleDateClick(event) {
    console.log(event);
    console.log('asdg');
    this.isOpen = false;
  }

  abrirEvento(event) {
    this.positionY = event.jsEvent.y;
    this.positionX = event.jsEvent.x;
    this.style = {
      'position': 'absolute',
      'color': 'red',
      'top': `${this.positionY}px`,
      'left': `${this.positionX - 50}px`,
      'z-index': '99999999'
    };
    console.log(event);
    this.isOpen = true;
    this.codigoPaciente = event.event.groupId;
    this.codigoAgendamento = event.event.id;
    this.agendamentoService.updateEvent.next(event.event.id);
  }

  buscarPaciente(codigo: any): string {
    let nome: string;
    this.pacienteService.buscarPorCodigo(codigo).subscribe((response) => {
      nome = response.nome;
    });
    return nome;
  }

  definirCor(statusAgendamento: number): string {
    switch (statusAgendamento) {
      case 1: {
        return '';
      }
      case 2: {
        return '#cda86f';
      }
      case 3: {
        return '#56a83b';
      }
      case 4: {
        return '#505050';
      }
      case 5: {
        return '#df1616';
      }
    }
  }

  configurarCalendario() {
    this.calendarComponent.eventLimitText = 'consultas';
    this.calendarComponent.header = {
      left: 'dayGridMonth,timeGridWeek,timeGridDay, listWeek',
      center: 'title',
      right: 'prevYear,prev,today,next,nextYear'
    };
    this.calendarComponent.buttonText = {
      today: 'Hoje',
      month: 'Mês',
      week: 'Semana',
      day: 'Dia',
      list: 'Lista'
    };
    this.calendarComponent.businessHours = [{
      daysOfWeek: [1, 2, 3, 4, 5],
      startTime: '08:00',
      endTime: '19:00'
    },
    {
      daysOfWeek: [6],
      startTime: '09:00',
      endTime: '14:00'
    }];
    this.calendarComponent.views = {
      dayGrid: {
        eventLimit: 4
      }
    };
    this.calendarComponent.hiddenDays = [0];
    this.calendarComponent.noEventsMessage = 'Sem consultas agendadas.';
    this.calendarComponent.height = 'parent';
    this.calendarComponent.aspectRatio = 2.5;
  }
}
