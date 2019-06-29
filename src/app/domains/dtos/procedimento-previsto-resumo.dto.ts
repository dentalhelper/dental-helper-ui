import { Link } from '../link.model';

export interface ProcedimentoPrevistoResumoDTO {
  codigoProcedimentoPrevisto: number;
  codigo: number;
  dataFinalizacao: string;
  dataInicio: string;
  finalizado: boolean;
  nomeProcedimento: string;
  valorDoProcedimento: number;
  links: Link[];
}
