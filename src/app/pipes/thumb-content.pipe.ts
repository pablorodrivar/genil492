import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbContent'
})
export class ThumbContentPipe implements PipeTransform {

  transform(value: string, args?: any): string {    
    return value.substring(0, 20);
  }

}
