export interface AgendamentoResumoDTO {
  codigoPaciente: number;
  codigoProcedimento: number;
  dataAgendamento: string;
  nomePaciente: string;
  nomeProcedimento: string;
  horaFim: string;
  horaInicio: string;
  observacao: string;
  primeiraAvalicao: boolean;
  statusAgendamento: number;
}
