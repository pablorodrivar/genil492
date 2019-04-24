import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})
export class SectionPage implements OnInit {

  section_id: any;


  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  async ngOnInit() {
    this.section_id = this.route.snapshot.paramMap.get('id');
  }

}
