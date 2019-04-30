import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage'; 
import { ToastController } from '@ionic/angular';

const USER_KEY = 'user-key';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  user_role: any;
  navigate: boolean = true;

  constructor(private router: Router, private storage: Storage, private toastController: ToastController) {}

  async ngOnInit() {
    await this.storage.get(USER_KEY).then(val => {
      this.user_role = val.role;
    });
  }

  toSection(id: number) {
    switch(id) {
      case 0:
        if(this.user_role >= 12 && this.user_role <= 16) {
          this.navigate = false;
        } else {
          this.navigate = true;
        }
      break;
        
      case 1:
        if(this.user_role >= 12 && this.user_role <= 15) {
          this.navigate = false;
        } else {
          this.navigate = true;
        }
      break;

      case 2:
        if(this.user_role >= 13 && this.user_role <= 16) {
          this.navigate = false;
        } else {
          this.navigate = true;
        }
      break;

      case 3:
        if(this.user_role == 12 || this.user_role >= 14) {
          this.navigate = false;
        } else {
          this.navigate = true;
        }
      break;

      case 4:
        if(this.user_role == 12 || this.user_role == 13 || this.user_role == 15 || this.user_role == 16 ) {
          this.navigate = false;
        } else {
          this.navigate = true;
        }
      break;

      case 5:
      if((this.user_role >= 0 && this.user_role <= 5) || this.user_role == 11) {
        this.navigate = true;
      } else {
        this.navigate = false;
      }
      break;
    }
    if(this.navigate) {
      this.router.navigate(['tab2/section/', id]);
    } else {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'No tienes los permisos para acceder a esa seccion.',
      duration: 2000
    });
    toast.present();
  }

  goTo(option: string) {
    if(option == 'cancionero') {
      this.router.navigate(['/cancionero']);
    }
  }
}
