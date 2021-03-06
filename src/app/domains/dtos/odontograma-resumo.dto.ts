import { Link } from '../link.model';
import { DenteOdontogramaResumoDTO } from './dente-odontograma-resumo.dto';

export interface OdontogramaResumoDTO {
  codPaciente: number;
  escalaDente: string;
  corDente: string;
  formaRosto: number;
  dentes: DenteOdontogramaResumoDTO[];
  links: Link[];
}
