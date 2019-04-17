import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { ToastController } from '@ionic/angular';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: string;
  public password: string;

  constructor(private authService: AuthenticationService, public toastController: ToastController) { }

  ngOnInit() {
  }

  login() {        
    this.authService.login(this.user, this.password).catch(() => {
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
