import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {  
  transform(value: string, delimiter: string): any[] | null {    
    if (value && delimiter) {    
      return value.split(delimiter);
    }
    return null;
  }

}
