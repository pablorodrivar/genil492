import { Component, OnInit } from '@angular/core';
import { Post } from '../pojo/post';
import { HttpService } from '../services/http.service';
import { ThumbContentPipe } from '../pipes/thumb-content.pipe';
import { Router,ActivatedRoute } from '@angular/router';
import { restoreView } from '@angular/core/src/render3';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  posts: any[] = [];

  constructor(private httpService: HttpService, private thumbContent: ThumbContentPipe, private router: Router) {}
  
  async ngOnInit() {
    await this.httpService.getLastPosts().then(res => {      
      res.post.forEach(element => {
        if(element.scope == 0) {
          this.posts.push(element);
        }
      });   
    })
  }    

  goToPost(id: number) {
    this.router.navigate(["/post",id]);
  }

  addPost() {
    this.router.navigate(["/add-post"]);
  }
}
