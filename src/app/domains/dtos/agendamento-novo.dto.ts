export interface AgendamentoNovoDTO {
  codigoPaciente: number;
  codigoProcedimento: number;
  dataAgendamento: Date;
  horaFim: string;
  horaInicio: string;
  observacao: string;
  primeiraAvalicao: boolean;
  statusAgendamento: number;
}
