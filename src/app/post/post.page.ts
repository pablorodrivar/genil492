import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

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
  post_section: any;
  user: any;
  login: any;
  role: any;
  event_beg: any;
  event_end: any;
  event_type: any;
  asistentes: any;
  comment: any;
  commentData: any[] = [];
  comments: any[] = [];
  sons: any[] = [];
  eventExists:boolean = false;
  clickable: boolean = false;

  constructor(private route: ActivatedRoute, private httpService: HttpService, private storage: Storage,
    private alertController: AlertController) { }

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
      this.event_beg = "Desde " + val.event[0].beg_date;
      this.event_end = "Hasta " + val.event[0].end_date;
      this.event_type = val.event[0].type;

      this.httpService.numberOfAssistants(val.event[0].id).then(val => {
        this.asistentes = val.as[0]['count(*)'] +  " asistentes";
      });
    });

    await this.httpService.getPostComments(this.post_id).then(val => {
      val.comment.forEach(element => {
        this.comments.push(element);
      });      
    });

    await this.httpService.getSons(this.user.id).then(val => {
      console.log(val)
      val.son.forEach(element => {
        this.sons.push(element.son);
      });
    });
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

  asistir() {
    if(this.user.role >= 6 && this.user.role <= 10) {
      this.clickable = true;
    } else {
      switch(this.post_section) {
        case 0:
          this.clickable = true;
        break;
  
        case 1:
          if(this.user.role == 1) {
            this.clickable = true;
          } else {
            this.clickable = false;
          }
        break;
  
        case 2:
          if(this.user.role == 2) {
            this.clickable = true;
          } else {
            this.clickable = false;
          }
        break;

        case 3:
          if(this.user.role == 3) {
            this.clickable = true;
          } else {
            this.clickable = false;
          }
        break;

        case 4:
          if(this.user.role == 4 || this.user.role == 13) {
            this.clickable = true;
          } else {
            this.clickable = false;
          }
        break;

        case 5:
          if(this.user.role == 5 || this.user.role == 14) {
            this.clickable = true;
          } else {
            this.clickable = false;
          }
        break;
      }
    }

    if(!this.clickable) {
      this.showAlert();
    } else {
      
    }
  }    
}
