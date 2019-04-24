import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'user-key';

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

  async postUser(userData: any) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/user/new";
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
          "login": userData[0] , 
          "password": window.btoa(userData[1]),
          "email": userData[2],
          "name": userData[3],
          "surname": userData[4],
          "sign_up_date": new Date(),
          "role": 3,
          "photo": null
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

  async getEmail(email: string) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/valid_email/email/" + email;
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

  async getLastPosts() {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/post/last";
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

  async getRole(id: number) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/role/" + id;
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

  async getPost(id: number) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/post/" + id;
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

  async postComment(commentData: any) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/comment/new";
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
          "user": commentData[0],
          "post": commentData[1],
          "comment": commentData[2]
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

  async getPostComments(post_id: number) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/comment/post_id/" + post_id;
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

  async getPosts() {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/post";
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
}

