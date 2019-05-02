import { Link } from '../link.model';
import { AgendamentoResumoPacienteDTO } from './agendamento-resumo-paciente.dto';

export interface PacienteAgendamentoDTO {
  codigoPaciente: number;
  agendamentos: AgendamentoResumoPacienteDTO[];
  links: Link[];
}
