import { Link } from '../link.model';

export interface OrcamentoPagamentoDTO {
  codigoOrcamento: number;
  tratamentos: string;
  valorEmAberto: number;
  valorPago: number;
  dataPagamento: Date;
  statusPagamento: number;
  links: Link[];
}
