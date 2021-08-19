import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 50, ellipses: string = '...'): string {
      return value.length <= limit ? value :`${value.substr(0, limit)}${ellipses}`;
  }

}
