import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { User } from '../pojo/user';
import { HttpService } from '../services/http.service';

const USER_KEY = 'user-key';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  user: any;
  role: any;

  constructor(private authService: AuthenticationService, private storage: Storage, private httpService: HttpService) {}

  ngOnInit() {
    this.storage.get(USER_KEY).then(val => {
      this.user = val;
      
      this.httpService.getRole(this.user.role).then(val => {
        console.log(val.name)
        this.role = val.name;
      });
    });    
  }

  logout() {
    this.authService.logout();
  }
}
