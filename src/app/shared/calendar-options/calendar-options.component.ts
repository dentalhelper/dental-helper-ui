import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import { ToastService } from 'src/app/core/services/toast.service';
import { AgendamentoService } from 'src/app/core/services/agendamento.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calendar-options',
  templateUrl: './calendar-options.component.html',
  styleUrls: ['./calendar-options.component.scss']
})
export class CalendarOptionsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  @Input() positionX: string;
  @Input() positionY: string;
  @Input() isOpen: boolean;
  @Input() codigoPaciente: number;
  @Input() codigoAgendamento: number;

  @Output() menuFechado = new EventEmitter();
  @Output() statusAtualizado = new EventEmitter();

  statusAgendamento = [
    { label: 'Confirmar', value: 2, color: '#cda86f' },
    { label: 'Finalizar', value: 3, color: '#56a83b' },
    { label: 'Faltou', value: 4, color: '#505050' },
    { label: 'Cancelar', value: 5, color: '#df1616' }
  ];

  status: any[] = [];

  constructor(
    private toastService: ToastService,
    private agendamentoService: AgendamentoService,
  ) { }

  emitirAcaoDoBotao() {
    this.menuFechado.emit(false);
  }

  ngOnInit() {
    this.carregarAgendamento(this.codigoAgendamento);
    this.subscription = this.agendamentoService.updateEvent.subscribe((codigoAgendamento) => {
      this.carregarAgendamento(codigoAgendamento);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  atualizarStatus(status: any) {
    this.agendamentoService.atualizarStatus(this.codigoAgendamento, status.value).subscribe(() => {
      const mensagemToast = `O Status foi atualizado.`;
      this.toastService.exibirSucesso(mensagemToast);
      this.statusAtualizado.emit();
      this.menuFechado.emit(false);
    });
  }

  carregarAgendamento(codigo: number) {
    if (this.status.length > 0) {
      this.status = [];
    }
    this.agendamentoService.buscarPorCodigo(codigo)
      .subscribe((response) => {
        this.statusAgendamento.forEach(element => {
          if (element.value !== response.statusAgendamento) {
            this.status.push(element);
          }
        });
      });
  }
}
