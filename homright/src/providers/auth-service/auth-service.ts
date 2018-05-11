import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

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
  	this.url ="http://localhost/homRight/api/get.php";
  }

  getUsers(){
  	return this.http.get(this.url).map(res=>res.json());
  }

  postData(data, type) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});
        console.log("Json en cours d'envoi");
        console.log(apiUrl+type);

        this.http.post(apiUrl+type, JSON.stringify(data), options=options).subscribe((res) => {
          console.log("data "+data);
            resolve(res);
            console.log("res "+res);
            }, (err) => {
            reject(err);
            console.log("Petit probleme");
        })

//        this.http.post(apiUrl+type, JSON.stringify(data), options=options).subscribe(res => {
//        	console.log("Json envoyé");
//        	//console.log(res);
//           	resolve(res);
//          	}, (err) => {
//            reject(err);
//            console.log("Petit probleme");
//        });
    });
  }

}