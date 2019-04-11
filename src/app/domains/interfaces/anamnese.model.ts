import { Link } from '../link.model';
import { Questao } from './questao.model';

export interface Anamnese {
  codigo: number;
  dataResp: Date;
  questoes: Questao[];
  links: Link[];
}
