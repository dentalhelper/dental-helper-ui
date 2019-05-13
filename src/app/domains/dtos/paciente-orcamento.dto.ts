import { OrcamentoResumoDTO } from './orcamento-resumo.dto';

export interface PacienteOrcamentoDTO {
  codigoPaciente: number;
  orcamentos: OrcamentoResumoDTO[];
}
