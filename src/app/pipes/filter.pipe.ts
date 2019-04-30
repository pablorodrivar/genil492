import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(songs: any[], text: string): any[] {
    if(text.length === 0) { return songs; }

    text = text.toLocaleLowerCase();

    return songs.filter(song => {
      return song.title.toLocaleLowerCase().indexOf(text) >= 0;
    });
  }

}
