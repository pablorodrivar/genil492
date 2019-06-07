import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpService } from '../../services/http.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public logedIn: boolean = true;
  public role: string;
  public email: string;
  public firstLogin = false;
  public name: string;
  public surname: string;

  constructor(public toastController: ToastController, public storage: Storage,
    public afAuth: AngularFireAuth, public http: HttpService, public alertController: AlertController) { }

  ngOnInit() {
  }

  deleteUser() {
    let user = firebase.auth().currentUser;

    user.delete().then(function() {
      console.log("User deleted")
    });
  }

  register() {
    if(typeof this.name !== undefined && this.name != undefined && this.name.length > 0 &&
      typeof this.surname !== undefined && this.surname != undefined && this.surname.length > 0) {
        let user = { email: this.email, name: this.name, photo: '', role: this.role, surname: this.surname };
        localStorage.setItem('user', JSON.stringify(user));
        this.http.postUser(user).then(data => {
          console.log(data)          
        });
      } else {
        this.presentToast();
      }
  }

  signOut() {
    this.afAuth.auth.signOut().then(()=> {
      localStorage.setItem('user', '');
    });
  }

  successCallback(event) {
    this.email = event.authResult.user.email;

    this.http.getAuthentication(this.email).then((data) => {
      let array = Object.values(data);
      if(array.length > 0) {        
        array.forEach(val => {
          let em = Object.values(val)[1];                 
          if(this.email == em) {
            this.role = Object.values(val)[0]; 
            this.logedIn = true;

            this.http.getUserByEmail(this.email).then(data => {
              if(data == "SyntaxError: Unexpected token N in JSON at position 0") {
                this.firstLogin = true;                
              } else {
                let user = Object.values(data)[0];
                localStorage.setItem('user', JSON.stringify(user))
              }
            });
          } else {
            this.presentAlert();
            this.logedIn = false;
            this.deleteUser();
          }
        });
      } else {
        this.presentAlert();
        this.logedIn = false;
        this.deleteUser();
      }      
    });    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error al acceder a la app',
      subHeader: 'Email no válido',
      message: 'El email introducido no figura en la base de datos, contacta con Pablo scouter para que te de de alta en la app.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Debes introducir todos los datos para acceder.',
      duration: 2000
    });
    toast.present();
  }
}
