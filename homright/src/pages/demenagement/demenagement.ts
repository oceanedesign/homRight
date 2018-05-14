import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{SignupPage} from "../signup/signup";

@Component({
  selector: 'page-demenagement',
  templateUrl: 'demenagement.html',
})
export class DemenagementPage {

  maisonData = {"voie":"41 rue Guynemer", "immeuble": "Résidence Arc-en-ciel","bp": "Appartement 220","cp": "93200", "ville" : "Saint Denis"};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemenagementPage');
  }

  changementMaison(){
    //Fonction permettant de mener vers la page "créer ou rejoindre une maison"
  	this.navCtrl.push(SignupPage);
  }

}
