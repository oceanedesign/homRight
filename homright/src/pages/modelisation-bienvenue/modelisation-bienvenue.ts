import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JeuModelisationPage } from '../jeu-modelisation/jeu-modelisation';
import { HomePage } from '../home/home';

/**
 * Generated class for the ModelisationBienvenuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    this.navCtrl.push(JeuModelisationPage);
  }
  pasModeliserMaison(){
    this.navCtrl.push(HomePage);
  }
  plusTard(){
    $(".fond-cache").css("display", "flex");
  }
  returnChoose(){
    $(".fond-cache").css("display", "none");
  }

}
