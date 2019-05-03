import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { HttpService } from '../services/http.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

const USER_KEY = 'user-key';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  user: any;
  role: any;
  name: string;
  ass: any[] = [];
  events: any[] = [];
  sons: any[] = [];

  constructor(private authService: AuthenticationService, private storage: Storage, private httpService: HttpService,
    private alertController: AlertController, public loadingController: LoadingController) {}

  async ngOnInit() {
    this.presentLoading();
    await this.storage.get(USER_KEY).then(val => {
      this.user = val;
      this.name = this.user.login;
      
      this.httpService.getRole(this.user.role).then(val => {
        console.log(val)
        this.role = val.role[0].name;
        this.role = this.role.toUpperCase();
      });
    }); 
    
    await this.httpService.getUserAssistance(this.user.id).then(ev => {
      this.ass = ev.as;

      this.ass.forEach(element => {
        this.httpService.getEventById(element.event).then(event => {
          this.events.push(event.event[0]);
        });
      });
    });

    await this.httpService.getSons(this.user.id).then(val => {
      console.log(val)
      val.son.forEach(element => {
        this.sons.push(element.son);
      });
    });  
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesion',
      message: 'Seguro que quiere cerrar sesion?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'SI',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  logout() {
    this.authService.logout();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 1000
    });
    await loading.present();
  }
}
