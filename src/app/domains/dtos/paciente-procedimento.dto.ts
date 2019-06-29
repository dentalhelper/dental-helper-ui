import { Link } from '../link.model';
import { ProcedimentoPrevistoResumoDTO } from './procedimento-previsto-resumo.dto';

export interface PacienteProcedimentoDTO {
  codigoPaciente: number;
  procedimentos: ProcedimentoPrevistoResumoDTO[];
  links: Link[];
}
