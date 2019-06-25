import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formaRosto'
})
export class FormaRostoPipe implements PipeTransform {

  transform(value: any): any {
    if (value === 1) {
      return 'square.png';
    } else if (value === 2) {
      return 'circle.png';
    } else if (value === 3) {
      return 'triangle.png';
    } else {
      return 'retangle.png';
    }
  }
}
