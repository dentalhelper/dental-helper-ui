import { Link } from './link.model';
import { AtributoMaterial } from './atributo-material.model';

export class Material {
  codigo: number;
  nome: string;
  fabricante: string;
  atributoMateriais = new Array<AtributoMaterial>();
  links: Link[];
}
