import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'rupiah'
})
export class RupiahPipe implements PipeTransform {
  transform(value: number): string {
    const numberFormat = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });

    return numberFormat.format(value).replace('IDR', 'Rp');
  }
}
