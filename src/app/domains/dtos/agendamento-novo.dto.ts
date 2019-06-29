export interface AgendamentoNovoDTO {
  codigoPaciente: number;
  codigoOrcamento: number;
  codigoProcedimentoPrevisto: number;
  dataAgendamento: Date;
  horaFim: Date;
  horaInicio: Date;
  observacao: string;
  primeiraAvalicao: boolean;
  statusAgendamento: number;
}
