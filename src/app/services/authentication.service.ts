import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'user-key';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform, private httpService: HttpService) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if(res) {
        this.authenticationState.next(true);
      }
    })
  }

  async login(user: string, password: string) {
    await this.httpService.getAuthentication(user, window.btoa(password)).then(val => {
      this.httpService.getUser(user).then(val => {
        console.log(val)
        this.httpService.postSession(val.user[0].id, val.user[0].login);

        this.storage.set(USER_KEY, val.user[0]);
      });

      return this.storage.set(TOKEN_KEY, val).then(() => {
        this.authenticationState.next(true);
      });
    });    
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.storage.remove(USER_KEY);
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
