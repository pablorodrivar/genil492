import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { HttpService } from '../../services/http.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const FIRST_REF = 'first-ref';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  imageResponse: any;
  options: any;
  nickname: string;
  password: string;
  password2:string;
  email: string;
  name: string;
  surname: string;
  userData: string[] = [];
  errorMsg: string;
  valid: boolean = true;
  valido: boolean = true;
 
  constructor(
    public alertController: AlertController, 
    private imagePicker: ImagePicker, 
    private httpService: HttpService,
    public toastController: ToastController,
    public authService: AuthenticationService,
    public storage: Storage
    ) { }

  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Ayuda',
      message: 'Para darte de alta en la app dale tu email a Pablo Scouter.',
      buttons: ['OK']
    });

    await alert.present();
  }

  getImage() {
    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      //maximumImagesCount: 3,
 
      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 200,
      //height: 200,
 
      // quality of resized image, defaults to 100
      quality: 25,
 
      // output type, defaults to FILE_URIs.
      // available options are 
      // window.imagePicker.OutputType.FILE_URI (0) or 
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    
    this.imageResponse = [];
    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (err) => {
      alert(err);
    });
  }

  /*register() {
    if(this.password != this.password2) {
      this.errorMsg = "Las contrasenyas no coinciden."
    } else {
      this.userData.push(this.nickname, this.password, this.email, this.name, this.surname);        

      let i: number = 0;
      this.userData.forEach((val) => {
        this.validate(i, val);
        i++;
      });

      if(this.valid) {
        this.httpService.getEmail(this.email).then((res) => {
          if(res.status != 205) {
            this.userData.push(res.valid_email[0].role);

            this.httpService.getUserByEmail(this.userData[2]).then(em => {
              if(em.user[0].email !== this.userData[2]) {
                this.httpService.postUser(this.userData).then(() => {
                  this.authService.login(this.userData[0], this.password).then(() => {    
                    this.storage.set(FIRST_REF, false);       
                  });
                  this.errorMsg = "Usuario registrado."
                });                  
              } else {
                this.errorMsg = "Ese email ya esta en uso."
              }
            });  
            
            this.httpService.getUser(this.userData[0]).then(user => {
              if(user.user[0].login !== this.userData[0]) {
                this.httpService.postUser(this.userData).then(() => {
                  this.authService.login(this.userData[0], this.password).then(() => {    
                    this.storage.set(FIRST_REF, false);       
                  });
                  this.errorMsg = "Usuario registrado."
                });  
              } else {
                this.errorMsg = "Ese nickname ya esta en uso."
              }
            });
          } else {
            this.errorMsg = "El email no figura en la base de datos. Por favor contacte con Pablo Scouter."
          }   
          
          if(res.status == 401) {
            this.errorMsg = "El nickname o el email ya existen."
          }
        }).catch(() => {
          this.errorMsg = "El email no figura en la base de datos. Por favor contacte con Pablo Scouter."
        });        
      }      
    }
    
    this.presentToast();
    this.errorMsg = "Usuario registrado.";
  }*/

  validate(index: number, input: string) {
    if(typeof input === "undefined") {      
      this.errorMsg = "Rellene los campos obligatorios";
      this.valid = false;
    } else {
      switch (index) {
        case 0:
          if(input.length < 4) {
            this.errorMsg = "El nickname no puede tener menos de 4 caracteres.";
            this.valid = false;
          }
        break;
  
        case 1: 
          if(input.length < 6) {
            this.errorMsg = "La contrasenya debe tener al menos 6 caracteres."
            this.valid= false;
          }
        break;
  
        case 2:
          this.httpService.getEmail(input).catch(() => {
            this.errorMsg = "El email no figura en la base de datos. Por favor contacte con Pablo Scouter.";
            this.valid = false;
          });
        break;
  
        case 3:
          if(input.length < 1) {
            this.errorMsg = "El nombre no puede ser vacio.";
            this.valid = false;
          }
        break;
  
        case 4:
          if(input.length < 1) {
            this.errorMsg = "El apellido no puede ser vacio.";
            this.valid = false;
          }
        break;
      }
    }    
  }

  async checkEmails(email: any) {
    await this.httpService.getUsers().then(val => {      
      console.log(val)
      val.user.forEach(element => {
        if(element.email == email) {
          this.valido = false;
        }
      });
    })
    console.log(this.valido + " vALIDO")
    return this.valido;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.errorMsg,
      duration: 2000
    });
    toast.present();
  }
}
