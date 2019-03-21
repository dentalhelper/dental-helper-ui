import { Link } from './link.model';
import { CategoriaDespesa } from './categoria-despesa.model';

export class Despesa {
  codigo: number;
  dataPrevista: Date;
  dataRealizada: Date;
  valor: number;
  descricao: string;
  comprovante: string;
  categoria = new CategoriaDespesa();
  links: Link[];
}
