import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureDemo',
  standalone: true
})
export class ImpureDemoPipe implements PipeTransform {

   transform(value: Object): void {
    console.log(JSON.stringify(value));
  }

}
