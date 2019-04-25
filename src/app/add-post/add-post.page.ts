import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';

const USER_KEY = 'user-key';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  tipo: any;
  ambito: any;
  user: any;
  role: any;
  title: string;
  content: string;
  dateBeg: any;
  dateEnd: any;

  constructor(private httpService: HttpService, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.get(USER_KEY).then(val => {
      this.user = val;
    });
  }

  tipoPost(t: any) {
    this.tipo = t;
    console.log(this.tipo)
  }

  scope(s: any) {
    this.ambito = s;
  }

  post() {

  }
}
