import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { HttpService } from '../services/http.service';
import { AlertController } from '@ionic/angular';

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

  constructor(private authService: AuthenticationService, private storage: Storage, private httpService: HttpService,
    private alertController: AlertController,) {}

  async ngOnInit() {
    await this.storage.get(USER_KEY).then(val => {
      this.user = val;
      this.name = this.user.login;
      
      this.httpService.getRole(this.user.role).then(val => {
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

      console.log(this.events)
    });
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesion',
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
}
