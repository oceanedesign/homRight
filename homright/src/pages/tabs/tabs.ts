import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConsoPage } from '../conso/conso';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';

@Component({
	selector: 'tabs',
  	templateUrl: 'tabs.html'
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  directionAccueil(){
    this.navCtrl.push(HomePage);
  }

  maMaison(){

  }

  editProfil(){}

  directionEvent(){

  }

  directionBoutique(){

  }

  directionForum(){
  	
  }
  directionContact(){
  	
  }

  directionBadges(){}

  directionPoints(){}

  directionParametre(){}

  retourMenu(){
  	this.navCtrl.pop();
  }

}
