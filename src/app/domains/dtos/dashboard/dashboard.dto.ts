import { AgendamentoDashBoardDTO } from './dashboard-consulta-dashboard.dto';
import { DespesaRecebimentoDashBoardDTO } from './dashboard-fluxo-caixa-dia.dto';
import { RecebimentoDespesaDashBoardGraficoDTO } from './dashboard-fluxo-caixa-semana.dto';

export interface DashBoardDTO {
  agendamentos: AgendamentoDashBoardDTO[];
  pagamentos: DespesaRecebimentoDashBoardDTO[];
  pagamentosGrafico: RecebimentoDespesaDashBoardGraficoDTO[];
}
