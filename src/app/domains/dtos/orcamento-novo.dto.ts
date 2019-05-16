import { Procedimento } from '../procedimento.model';

export interface OrcamentoNovoDTO {
  codigoOrcamento: number;
  valorTotal: number;
  codPaciente: number;
  dataOrcamento: Date;
  aprovado: boolean;
  procedimentos: Procedimento[];
}
