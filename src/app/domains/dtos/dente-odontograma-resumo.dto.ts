import { Link } from '../link.model';
import { ProcedimentoOdontogramaResumoDTO } from './procedimento-odontograma-resumo.dto';

export interface DenteOdontogramaResumoDTO {
  codigo: number;
  existente: boolean;
  numero: number;
  observacao: string;
  procedimentos: ProcedimentoOdontogramaResumoDTO[];
  status: number;
  links: Link[];
}
