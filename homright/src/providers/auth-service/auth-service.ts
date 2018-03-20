import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';


let apiUrl = 'http://localhost/homRight/api/';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

	public url: string;

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  	this.url ="http://localhost/homRight/api/api.php";
  }

  getUsers(){
  	return this.http.get(this.url).map(res=>res.json())
  }

  postData(data, type) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log("Json en cours d'envoi");
        this.http.post(apiUrl+type, JSON.stringify(data), {headers: headers}).subscribe(res => {
        	console.log("Json envoyé");
        	console.log(res);
           	resolve(res);
          	}, (err) => {
            reject(err);
            console.log("Petit probleme");
        });
    });
  }

}