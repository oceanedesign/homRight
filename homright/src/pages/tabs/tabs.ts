import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConsoPage } from '../conso/conso';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';
import{EventsPage} from "../events/events";
import { MonFournisseurPage } from '../mon-fournisseur/mon-fournisseur';
import { ForumAccueilPage } from '../forum-accueil/forum-accueil';
import { BoutiquePage} from '../boutique/boutique';

declare var jQuery:any;
declare var $:any;

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
    $(".menu-principal").css("display", "none");
    $(".sous-menu").css("display", "block");
  }

  retour(){
    $(".menu-principal").css("display", "block");
    $(".sous-menu, .profilSection.sous-menu").css("display", "none");
  }

  editProfil(){}

  directionEvent(){
    this.navCtrl.push(EventsPage);
  }

  directionFournisseur(){
		this.navCtrl.push(MonFournisseurPage);
  }

  directionComparer(){}

  directionBudget(){}

  directionBoutique(){
    this.navCtrl.push(BoutiquePage);
  }

  directionForum(){
		this.navCtrl.push(ForumAccueilPage);
  }
  directionContact(){

  }

  directionBadges(){}

  directionPoints(){}

  directionParametre(){}

  directionDemenagement(){}

  retourMenu(){
  	this.navCtrl.pop();
  }

}
