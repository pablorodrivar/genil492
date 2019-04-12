import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  response: any;

  constructor(private http: HttpClient) { }

  static async getAuthentication(user: string, password: string) {
    let url = "https://genil-api-v3-puvlo.c9users.io/public/";
    let b64access = window.btoa(user + ":" + password);

    if (!checkMSIE()) {
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
    } else {
      // START XMLHTTP
      var req = new XMLHttpRequest();
      var value;

      //req.withCredentials = true;
      req.open("GET", url);

      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("Authorization", "Basic " + b64access);
      
      req.send();

      req.onreadystatechange = function() {
        if (req.readyState === 4) {
          value = req.response;
          observe.apply(this, [value]);
        }
      }

      return new Promise(await function(resolve, reject) {
        resolve(this.values);
        reject(new Error("Error"));
      })
      // END XMLHTTP
    }

  function observe(ev) {
    this.values = ev;
  }
  
  function checkMSIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      //console.log('Internet Explorer');
      return true;
    } else {
      //console.log('Other Browser');
      return false;
    }
  }
  }
}

