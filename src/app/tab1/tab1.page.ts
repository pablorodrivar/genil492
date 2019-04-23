import { Component, OnInit } from '@angular/core';
import { Post } from '../pojo/post';
import { HttpService } from '../services/http.service';
import { ThumbContentPipe } from '../pipes/thumb-content.pipe';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  posts: Post[];

  constructor(private httpService: HttpService, private thumbContent: ThumbContentPipe) {}
  
  ngOnInit() {
    this.httpService.getLastPosts().then(res => {
      this.posts = res.post;
      console.log(this.posts)
    })    
  }  
}
