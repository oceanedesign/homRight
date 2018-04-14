import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{JeuModelisationPage} from "../jeu-modelisation/jeu-modelisation";
/**
 * Generated class for the StatsVue_3dPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats-vue-3d',
  templateUrl: 'stats-vue-3d.html',
})
export class StatsVue_3dPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsVue_3dPage');
  }

  directionJeu(){
	this.navCtrl.push(JeuModelisationPage);  	
  }
}
