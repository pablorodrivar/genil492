import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const FIRST_REF = 'first-ref';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: string;
  public password: string;

  constructor(private authService: AuthenticationService, public toastController: ToastController, public storage: Storage) { }

  ngOnInit() {
  }

  login() {        
    this.authService.login(this.user, this.password).then(() => {
      this.storage.set(FIRST_REF, false);
    }).catch((err) => {
        this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o clave incorrectos.',
      duration: 2000
    });
    toast.present();
  }
}
