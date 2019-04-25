import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

const USER_KEY = 'user-key';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  posts: any[] = [];
  user: any;

  constructor(private httpService: HttpService, private router: Router, private storage: Storage,
    private alertController: AlertController) {}
  
  async ngOnInit() {
    await this.storage.get(USER_KEY).then(val => {
      this.user = val;
    });

    await this.httpService.getLastPosts().then(res => {      
      res.post.forEach(element => {
        if(element.scope == 0) {
          this.posts.push(element);
        }
      });   
    })
  }    

  goToPost(id: number) {
    this.router.navigate(["/post",id]);
  }

  addPost() {
    this.router.navigate(["/add-post"]);
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Colores',
      message: 'Azul: Colonia\nAmarillo: Lobatos\nVerde: Tropa\nNaranja: Unidad\nRojo: Clan\nCeleste: General',
      buttons: ['OK']
    });

    await alert.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.posts = [];
      this.ngOnInit();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);    
  }
}
