import { AgendamentoDashBoardDTO } from './dtos/dashboard/dashboard-consulta-dashboard.dto';

export class BadgeConsulta {
  total: number;
  realizada: number;
  pendente: number;
  cancelada: number;

  constructor() {
    this.total = 0;
    this.realizada = 0;
    this.pendente = 0;
    this.cancelada = 0;
  }

  verificarStatusAgendamento(agendamentos: AgendamentoDashBoardDTO[]) {
    agendamentos.forEach((agendamento) => {
      this.total++;
      switch (agendamento.status) {
        case 1:
          this.pendente++;
          break;
        case 2:
          this.pendente++;
          break;
        case 3:
          this.realizada++;
          break;
        case 4:
          this.cancelada++;
          break;
        case 5:
          this.cancelada++;
          break;
        default:
          break;
      }
    });
  }
}
