import { Link } from '../link.model';

export interface PacienteSelectComFotoDTO {
  codigo: number;
  nome: string;
  urlDaFoto: string;
  links: Link[];
}
