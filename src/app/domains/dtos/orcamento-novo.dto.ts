import { ProcedimentoPrevistoNovoDTO } from './procedimento-novo.dto';

export interface OrcamentoNovoDTO {
  codigoOrcamento: number;
  valorTotal: number;
  codPaciente: number;
  dataOrcamento: Date;
  aprovado: boolean;
  desconto: number;
  procedimentos: ProcedimentoPrevistoNovoDTO[];
}
