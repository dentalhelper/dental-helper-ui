import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPagamento'
})
export class StatusPagamentoPipe implements PipeTransform {

  transform(value: any): any {
    if (value === 1) {
      return 'Em aberto';
    }
    if (value === 2) {
      return 'Pago';
    }
    if (value === 3) {
      return 'Cancelado';
    }
  }

}
