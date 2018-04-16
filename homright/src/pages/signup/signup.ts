import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{RejoindreMaisonPage} from "../rejoindre-maison/rejoindre-maison";
import { CreerMaisonPage } from '../creer-maison/creer-maison';
import {NativePageTransitions, NativeTransitionOptions} from '@ionic-native/native-page-transitions';


@IonicPage({
	name:'page-signup'
	})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
  }

  creerMaison(){
    let options: NativeTransitionOptions={
    direction: 'up',
    duration: 500
   };
    this.nativePageTransitions.slide(options);
  	this.navCtrl.push(CreerMaisonPage);
  }

  rejoindreMaison(){
  	this.navCtrl.push(RejoindreMaisonPage);
  }

}
