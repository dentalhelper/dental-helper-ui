export interface AgendamentoResumoPacienteDTO {
  codigoPaciente: number;
  codigoAgendamento: number;
  dataAgendamento: string;
  horaFim: string;
  horaInicio: string;
  nomeProcedimento: string;
  primeiraAvalicao: boolean;
  statusAgendamento: string;
}
