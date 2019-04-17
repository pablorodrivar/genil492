import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {

  response: any;
  token: string;

  constructor(private http: HttpClient, private storage: Storage) {
    
  }

  ngOnInit() {
    if (this.storage.get(TOKEN_KEY)) {
      this.storage.get(TOKEN_KEY).then(val => {
        this.token = val;
      });
    }
  }

  async getAuthentication(user: string, password: string) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/";
    let b64access = window.btoa(user + ":" + password);
    // START FETCH
    return fetch(url, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + b64access
      }
    }).then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res;
      }
    }).catch(err => err);
    // END FETCH
  }

  async getUser(login: string) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/user/login/" + login;
    let b64access = window.btoa(this.token);
    // START FETCH
    return fetch(url, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + b64access
      }
    }).then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res;
      }
    }).catch(err => err);
    // END FETCH
  }

  async postSession(userId: number, login: string) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/session/new";
    let b64access = window.btoa(this.token);
    // START FETCH
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + b64access
      },
      body: JSON.stringify(
        {
          "user": userId, 
          "login": login,
          "date": new Date()
        }
        )
    }).then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res;
      }
    }).catch(err => err);
    // END FETCH
    }
}

