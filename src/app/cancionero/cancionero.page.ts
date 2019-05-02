import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-cancionero',
  templateUrl: './cancionero.page.html',
  styleUrls: ['./cancionero.page.scss'],
})
export class CancioneroPage implements OnInit {

  songs: any[] = [];
  searchText = '';

  constructor(private httpService: HttpService, private platform: Platform, private file: File, private ft: FileTransfer, 
    private fileOpener: FileOpener, private document: DocumentViewer,) { }

  ngOnInit() {
    this.httpService.getSongs().then(val => {
      this.songs = val.song;
    });
  }

  searchSong(event) {
    const text = event.target.value;
    this.searchText = text;    
  }

  openSong(path: string) {
    let filePath = this.file.applicationDirectory + 'www/assets';

    if (this.platform.is('android')) {
      let fakeName = Date.now();
      this.file.copyFile(filePath, path, this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      })
    } else {
      // Use Document viewer for iOS for a better UI
      const options: DocumentViewerOptions = {
        title: 'My PDF'
      }
      this.document.viewDocument(`${filePath}/5-tools.pdf`, 'application/pdf', options);
    }
  }
}
