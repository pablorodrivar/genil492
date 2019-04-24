import { Component, OnInit } from '@angular/core';
import { Post } from '../pojo/post';
import { HttpService } from '../services/http.service';
import { ThumbContentPipe } from '../pipes/thumb-content.pipe';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  posts: Post[];

  constructor(private httpService: HttpService, private thumbContent: ThumbContentPipe, private router: Router) {}
  
  ngOnInit() {
    this.httpService.getLastPosts().then(res => {
      this.posts = res.post;
    })
  }    

  goToPost(id: number) {
    this.router.navigate(["/post",id]);
  }
}
