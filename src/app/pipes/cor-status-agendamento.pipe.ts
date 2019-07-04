import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'corStatusAgendamento'
})
export class CorStatusAgendamentoPipe implements PipeTransform {

  transform(value: any): any {
    if (value === 1 || value === 2) {
      return 'warn';
    } else if (value === 3) {
      return 'success';
    } else {
      return 'danger';
    }
  }
}
