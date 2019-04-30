import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

const USER_KEY = 'user-key';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  post_id: any;
  post_title: string;
  post_author: any;
  post_content: any;
  post_date: any;
  post_gallery: any;
  post_thumbnail: any;
  post_section: number;
  user: any;
  login: any;
  role: any;
  event_id: any;
  event_beg: any;
  event_end: any;
  event_type: any;
  event_assistants: any;
  asistentes: any;
  comment: any;
  commentData: any[] = [];
  comments: any[] = [];
  sons: any[] = [];
  inputs: any[] = [];
  assData: any[] = [];
  checked: boolean;
  list: string = "";
  repetido: boolean = false;
  eventExists:boolean = false;
  clickable: boolean = false;
  asistira: boolean = false;

  constructor(private route: ActivatedRoute, private httpService: HttpService, private storage: Storage,
    private alertController: AlertController, private toastController: ToastController) { }

  async ngOnInit() {
    this.post_id = this.route.snapshot.paramMap.get('id');

    await this.storage.get(USER_KEY).then(val => {
      this.user = val;
      this.login = val.login;
      
      this.httpService.getRole(this.user.role).then(val => {
        this.role = val.role[0].name;
        this.role = this.role.toUpperCase();
      });
    }); 

    await this.httpService.getPost(this.post_id).then(val => {
      this.post_title = val.post[0].title;
      this.post_author = val.post[0].author;
      this.post_content = val.post[0].content;
      this.post_date = val.post[0].date;
      this.post_section = val.post[0].section;
      this.post_gallery = val.post[0].gallery;
      this.post_thumbnail = val.post[0].thumbnail;
    });

    await this.httpService.getEvent(this.post_title).then(val => {
      if(val !== "No existen eventos en la base de datos con ese nombre.") {
        this.eventExists = true;
      }        

      this.event_id = val.event[0].id;
      this.event_beg = "Desde " + val.event[0].beg_date;
      this.event_end = "Hasta " + val.event[0].end_date;
      this.event_type = val.event[0].type;

      this.httpService.numberOfAssistants(val.event[0].id).then(val => {
        this.asistentes = "Asistentes: " + val.as[0]['count(*)'];
      });
    });

    await this.httpService.getPostComments(this.post_id).then(val => {
      if(val.comment !== undefined){
        val.comment.forEach(element => {
          this.comments.push(element);
        });
      }        
    });

    await this.httpService.getAssistantsByEvent(this.event_id).then(ass => {
      if(ass.indexOf('No existen ass en la base de datos con ese ID.') < 0){
        this.event_assistants = ass.as;

        this.event_assistants.forEach(element => {
          this.httpService.getUserById(element.user).then(val => {
            this.list = this.list + val.user[0].login + "\n";
            if(val.user[0].id == this.user.id) {
              this.asistira = true;
            }
          });  
        });
        this.list = this.list.substr(9, this.list.length-3);
      }      
    });

    await this.httpService.getSons(this.user.id).then(val => {
      console.log(val)
      val.son.forEach(element => {
        this.sons.push(element.son);
      });

      this.inputs = [];
      this.sons.forEach(son => {
        this.httpService.getUserById(son).then(name => {
          this.inputs.push({
            "name": name.user[0].name,
            "type": "checkbox",
            "label": name.user[0].name,
            "value": name.user[0].id
          });
        });
      }); 
      
      this.inputs.push({
        "name": "Yo",
        "type": "checkbox",
        "label": "Yo",
        "value": this.user.id
      });
    });    

    console.log(this.inputs)

    //await this.checkClickable();
  }

  sendComment() {
    this.commentData.push(this.user.id);
    this.commentData.push(this.post_id);
    this.commentData.push(this.comment);    

    this.httpService.postComment(this.commentData);
    this.comments.push(this.commentData[2]);
    this.comment = "";
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'No tienes permisos para realizar esa acción',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showAss() {    
    const alert = await this.alertController.create({
      header: 'Asistentes',
      message: this.list,
      buttons: ['OK']
    });

    await alert.present();
  }

  async sonAlert() {
    const alert = await this.alertController.create({
      header: '¿Quién asistirá?',
      inputs: this.inputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (val) => {
            if(this.event_assistants !== undefined){
              this.event_assistants.forEach(element => {
                if(element.user == val[0]) {
                  this.repetido = true;
                  this.presentToast();
                }
              });  
            }

            console.log("repetido " + this.repetido)

            if(!this.repetido) {
              this.repetido = false;
              val.forEach(element => {
                this.assData.push(element);            
                this.assData.push(this.event_id);
                console.log(this.assData)
                this.httpService.postAssistance(this.assData).then(res => {
                  console.log(res)
                });                             
                this.repetido = false;
                this.assData = [];
                this.presentToastSucc();
              });
              this.doRefresh();              
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async eraseAlert() {
    const alert = await this.alertController.create({
      header: '¿Quién no asistirá?',
      inputs: this.inputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (val) => {
            /*if(this.event_assistants !== undefined){
              this.event_assistants.forEach(element => {
                if(element.user == val[0]) {
                  this.repetido = true;
                  this.presentToast();
                }
              });  
            }

            console.log("repetido " + this.repetido)*/

            //if(!this.repetido) {
              //this.repetido = false;
              val.forEach(element => {
                this.httpService.deleteAssistance(element, this.event_id).then(res => {
                  console.log(res)
                });
                this.assData = [];
                this.presentToastEr();
              });
              this.doRefresh();              
            //}
          }
        }
      ]
    });

    await alert.present();
  }

  doRefresh() {
    setTimeout(() => {
      this.asistentes = [];
      this.ngOnInit();
      console.log('Async operation has ended');
    }, 2000);    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ese usuario ya está en la lista de asistencia.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastSucc() {
    const toast = await this.toastController.create({
      message: 'Añadido(s) a la lista de asistencia.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastEr() {
    const toast = await this.toastController.create({
      message: 'Borrado(s) de la lista de asistencia.',
      duration: 2000
    });
    toast.present();
  }

  eraseAss() {
    this.eraseAlert();
  }

  checkClickable() {
    console.log("POST: " + this.post_section + "ROL: " + this.user.role)
    if((this.user.role >= 6 && this.user.role <= 10) || this.user.role == 0) {
      this.clickable = true;
    } else {
      console.log(this.post_section + " ROL: " + this.user.role)
      if(this.post_section == 0) {
        console.log("HEY")
        this.clickable = true;
      } else if(this.post_section == 1) {
        console.log("HEY")
        if(this.user.role == 1 || this.user.role == 6) {
          this.clickable = true;
        } else {
          this.clickable = false;
        }
      } else if(this.post_section == 2) {
        console.log("HEY")
        if(this.user.role == 2 || this.user.role == 7) {
          this.clickable = true;
        } else {
          this.clickable = false;
        }
      } else if(this.post_section == 3) {
        console.log("HEY")
        if(this.user.role == 3 || this.user.role == 8) {
          this.clickable = true;
        } else {
          this.clickable = false;
        }
      } else if(this.post_section == 4) {
        console.log("HEY")
        if(this.user.role == 4 || this.user.role == 13) {
          this.clickable = true;
        } else {
          this.clickable = false;
        }
      } else if(this.post_section == 5) {
        console.log("HEY")
        if(this.user.role == 5 || this.user.role == 14) {
          this.clickable = true;
        } else {
          this.clickable = false;
        }
      }
    }

      /*switch(this.post_section) {
        case 0: {
          console.log(this.user.role + "HEEEEY")
          this.clickable = true;
          break;
        }          
  
        case 1: {       
          if(this.user.role === 1 || this.user.role === 6) {
            this.clickable = true;
          } else {
            this.clickable = false;
          }
          break;
        }          
  
        case 2: {
          if(this.user.role == 2 || this.user.role == 7) {
            this.clickable = true;
          } else {
            this.clickable = false;
          }
          break;
        }          

        case 3: {
          if(this.user.role == 3 || this.user.role == 8) {
            this.clickable = true;
          } else {
            this.clickable = false;
          }
          break;
        }          

        case 4: {
          if(this.user.role == 4 || this.user.role == 13) {
            this.clickable = true;
          } else {
            this.clickable = false;
          }
          break;
        }          

        case 5: {
          if(this.user.role == 5 || this.user.role == 14) {
            this.clickable = true;
          } else {
            this.clickable = false;
          }
          break;
        }          
      }*/
    
  }

  async asistir() {    
    await this.checkClickable();
    if(!this.clickable) {
      this.showAlert();
    } else {
      this.sonAlert();
    }
  }    
}
