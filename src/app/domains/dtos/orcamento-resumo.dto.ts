import { Link } from '../link.model';

export interface OrcamentoResumoDTO {
  codigoOrcamento: number;
  valorTotal: number;
  dataOrcamento: Date;
  aprovado: boolean;
  links: Link[];
}
