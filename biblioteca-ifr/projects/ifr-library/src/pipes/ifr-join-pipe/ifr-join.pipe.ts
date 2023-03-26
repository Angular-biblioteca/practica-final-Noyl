import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
})
export class IfrJoinPipe implements PipeTransform {
  transform(value: string[] | null, separator: string = ','): any {
    if (!value) {
      return '';
    }
    return value.join(separator);
  }
}
