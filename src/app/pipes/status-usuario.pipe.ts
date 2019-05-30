import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusUsuario'
})
export class StatusUsuarioPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      return 'Ativo';
    } else {
      return 'Inativo';
    }
  }
}
