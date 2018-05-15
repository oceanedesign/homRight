import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  pushAccueil(){
  	//fonction menant vers l'accueil principal
  	this.navCtrl.push(HomePage);
  }
}
