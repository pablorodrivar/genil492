import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-cancionero',
  templateUrl: './cancionero.page.html',
  styleUrls: ['./cancionero.page.scss'],
})
export class CancioneroPage implements OnInit {

  songs: any[] = [];
  searchText = '';

  constructor(private httpService: HttpService,) { }

  ngOnInit() {
    this.httpService.getSongs().then(val => {
      this.songs = val.song;
    });
  }

  searchSong(event) {
    const text = event.target.value;
    this.searchText = text;    
  }
}
