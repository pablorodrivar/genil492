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

  async getUsers() {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/user";
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
          "role": userData[5],
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

  async getServices() {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/service";
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

  async post(postData: any) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/post/new";
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
          "title": postData[0],
          "content": postData[1],
          "date": new Date(),
          "author": postData[4],
          "event": postData[2],
          "scope": postData[3],
          "section": postData[5],
          "thumbnail": "null",
          "gallery": "null"
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

  async postEvent(eventData: any) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/event/new";
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
          "name": eventData[0],
          "beg_date": eventData[1],
          "end_date": eventData[2],
          "type": eventData[3]
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

  async numberOfAssistants(eventId: number) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/assistance/number/" + eventId;
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

  async getEvent(name: string) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/event/name/" + name;
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

  async getPostBySection(section: number) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/post/section/" + section;
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

  async getSons(father_id: number) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/family/son/" + father_id;
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

  async postAssistance(asData: any) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/assistance/new";
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
          "user": asData[0],
          "event": asData[1]                
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

  async getUserById(id: number) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/user/" + id;
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

  async getAssistantsByEvent(id: number) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/assistance/event/" + id;
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

  async getValidEmails() {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/valid_email";
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

  async getUserByEmail(email: any) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/user/email/" + email;
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

  async getUserAssistance(user: any) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/assistance/user/" + user;
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

  async getEventById(id: any) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/event/" + id;
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

  async deleteAssistance(id: any) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/assistance/user/" + id;
    let b64access = window.btoa(this.token);
    // START FETCH
    return fetch(url, {
      method: 'DELETE',
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

