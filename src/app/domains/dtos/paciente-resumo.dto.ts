import { Link } from '../link.model';

export interface PacienteResumoDTO {
  codigo: number;
  nome: string;
  cPF: string;
  telefone: string;
  email?: string;
  links: Link[];
}
