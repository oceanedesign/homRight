import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	orderBy:string;
	
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  	this.updateRoutines;
  }
  creerScene(){
  	//this.navCtrl.push(creerScenePage);
  }

  pushEvent(){

  }

updateRoutines(value: string){
	this.orderBy = value;
}
}