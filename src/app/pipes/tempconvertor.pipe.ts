import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempconvertor',
  standalone: true
})
export class TempconvertorPipe implements PipeTransform {

  transform(value: number, unit: 'celsius' | 'fahrenheit' = 'celsius'): number {

    if(!value) return value;

    if(unit === 'celsius'){
      return Math.round(value - 273.15);
    }else if(unit === 'fahrenheit'){
      return Math.round((value - 273.15) * 9/5 + 32);
    }
    return value;

  }

}
