import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

const USER_KEY = 'user-key';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  tipo: any = 4;
  ambito: any = 0;
  user: any;
  role: any;
  title: string;
  content: string;
  dateBeg: any;
  dateEnd: any;
  postData: any[] = [];
  eventData: any[] = [];
  postable: boolean = true;

  constructor(private httpService: HttpService, private storage: Storage, public toastController: ToastController) { }

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
    this.postable = true;
    this.postData.push(this.title);
    this.postData.push(this.content);
    this.postData.push(this.tipo);
    this.postData.push(this.ambito);
    this.postData.push(this.user.login);
    this.eventData.push(this.title);
    this.eventData.push(this.dateBeg);
    this.eventData.push(this.dateEnd);
    this.eventData.push(this.tipo);

    this.postData.forEach(element => {
      if(element === undefined) {
        this.presentToast();
        this.postData = [];
        this.postable = false;
      }
    });

    this.eventData.forEach(element => {
      if(element === undefined) {
        this.presentToast();
        this.eventData = [];
        this.postable = false;
      }
    });

    if(this.tipo == 4) {      
      if(this.postable) {
        this.httpService.post(this.postData);
      }      
    } else {      
      if(this.postable) {
        this.httpService.post(this.postData).then(val => {
          this.httpService.postEvent(this.eventData);
        });
      }  
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Rellena los campos obligatorios.',
      duration: 2000
    });
    toast.present();
  }
}
