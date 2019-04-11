import { Link } from '../link.model';
import { Anamnese } from '../interfaces/anamnese.model';

export interface PacienteAnamneseDTO {
  codigoPaciente: number;
  anamnese: Anamnese;
  links: Link[];
}
