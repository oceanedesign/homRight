import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{RejoindreMaisonPage} from "../rejoindre-maison/rejoindre-maison";
import { CreerMaisonPage } from '../creer-maison/creer-maison';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	name:'page-signup'
	})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  creerMaison(){
  	this.navCtrl.push(CreerMaisonPage);
  }

  rejoindreMaison(){
  	this.navCtrl.push(RejoindreMaisonPage);
  }

}
