import { Anamnese } from './anamnese.model';
import { Link } from '../link.model';

export interface Questao {
  codigo: number;
  descricao: string;
  resposta: string;
  informAdicionais: string;
  anamnese: Anamnese;
  links: Link[];
}
