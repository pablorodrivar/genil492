import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';

const USER_KEY = 'user-key';

@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})
export class SectionPage implements OnInit {

  section_id: any;
  actual_id: number;
  user: any;
  posts: any[] = [];

  constructor(private route: ActivatedRoute, private httpService: HttpService, private storage: Storage, private router:Router) { }

  async ngOnInit() {
    await this.storage.get(USER_KEY).then(val => {
      this.user = val;
    });

    this.section_id = this.route.snapshot.paramMap.get('id');
    if(this.section_id == 6) {
      this.actual_id = 0;
    } else {
      this.actual_id = +this.section_id + 1;
    }

    await this.httpService.getPostBySection(this.actual_id).then(val => {
      this.posts = val.section;
    });
  }

  goToPost(id: number) {
    this.router.navigate(["/post",id]);
  }

}
