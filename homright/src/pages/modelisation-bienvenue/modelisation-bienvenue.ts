import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PreModelisationPage } from '../pre-modelisation/pre-modelisation';
import { HomePage } from '../home/home';

 declare var JQuery:any;
 declare var $:any;
 import 'jquery-ui-dist/jquery-ui';

@IonicPage()
@Component({
  selector: 'page-modelisation-bienvenue',
  templateUrl: 'modelisation-bienvenue.html',
})
export class ModelisationBienvenuePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelisationBienvenuePage');
  }
  modeliserMaison(){
    this.navCtrl.push(PreModelisationPage);
  }
  pasModeliserMaison(){
    //Fonction permettant d'aller vers l'accueil principal
    this.navCtrl.push(HomePage);
  }

  plusTard(){
    //Fonction faisant apparaitre la pop up si l'utilisateur refuse de faire la modélisation
    $(".fond-cache").css("display", "flex");
  }
  returnChoose(){
    $(".fond-cache").css("display", "none");
  }

}
