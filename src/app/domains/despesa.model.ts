import { Link } from './link.model';
import { CategoriaDespesa } from './categoria-despesa.model';
import { Pagamento } from './pagamento.model';

export class Despesa {
  codigo: number;
  valor: number;
  descricao: string;
  categoria = new CategoriaDespesa();
  pagamento = new Pagamento();
  links: Link[];
}
