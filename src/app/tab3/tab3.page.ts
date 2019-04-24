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
  name: string;

  constructor(private authService: AuthenticationService, private storage: Storage, private httpService: HttpService) {}

  async ngOnInit() {
    await this.storage.get(USER_KEY).then(val => {
      this.user = val;
      this.name = this.user.login;
      
      this.httpService.getRole(this.user.role).then(val => {
        this.role = val.role[0].name;
        this.role = this.role.toUpperCase();
      });
    });    
  }

  logout() {
    this.authService.logout();
  }
}
