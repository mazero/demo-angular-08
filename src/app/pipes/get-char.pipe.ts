import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getChar'
})
export class GetCharPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    console.log('value => ', value, 'args => ', args);
    if(args[0] && args[0] < value.length) {
      return value[args[0]-1];
    }
    return value[0];
  }

}
