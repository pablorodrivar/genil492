import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { CommentStmt } from '@angular/compiler';

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
  eventExists:boolean = false;

  constructor(private route: ActivatedRoute, private httpService: HttpService, private storage: Storage) { }

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
      this.post_gallery = val.post[0].gallery;
      this.post_thumbnail = val.post[0].thumbnail;
    });

    await this.httpService.getEvent(this.post_title).then(val => {     
      this.eventExists = true;
      this.event_beg = "Desde " + val.event[0].beg_date;
      this.event_end = "Hasta " + val.event[0].end_date;
      this.event_type = val.event[0].type;

      this.httpService.numberOfAssistants(val.event[0].id).then(val => {
        this.asistentes = val.as[0]['count(*)'];
        this.post_title = this.post_title + " (" + this.asistentes + " asistentes)"
      });
    });

    await this.httpService.getPostComments(this.post_id).then(val => {
      val.comment.forEach(element => {
        this.comments.push(element);
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
}
