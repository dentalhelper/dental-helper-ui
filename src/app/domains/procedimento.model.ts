import { Link } from './link.model';

export class Procedimento {
  codigo: number;
  descricao: string;
  duracaoMinutos: number;
  nome: string;
  valorBase: number;
  links: Link[];
}
