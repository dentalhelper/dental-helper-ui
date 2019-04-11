import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rg'
})
export class RgPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let str = value + '';

    str = str.replace(/\D/g, '');

    str = str.replace(/^(\d{1})(\d{3})(\d{3})/, '$1.$2.$3');

    return str;
  }

}
