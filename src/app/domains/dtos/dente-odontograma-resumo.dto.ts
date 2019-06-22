import { Link } from '../link.model';

export interface DenteOdontogramaResumoDTO {
  codigo: number;
  existente: boolean;
  numero: number;
  observacao: string;
  procedimentos: string[];
  status: number;
  links: Link[];
}
