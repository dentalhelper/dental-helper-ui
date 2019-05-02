export interface AgendamentoNovoDTO {
  codigoPaciente: number;
  codigoProcedimento: number;
  dataAgendamento: Date;
  horaFim: Date;
  horaInicio: Date;
  observacao: string;
  primeiraAvalicao: boolean;
  statusAgendamento: number;
}
