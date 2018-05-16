import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModelisationBienvenuePage } from '../modelisation-bienvenue/modelisation-bienvenue';

@IonicPage()
@Component({
  selector: 'page-points-cles',
  templateUrl: 'points-cles.html',
})
export class PointsClesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PointsClesPage');
  }

  modelisationBienvenue(){
    //Fonction menant sur l'écran demandant à l'utilisateur s'il veut modéliser sa maison
  	this.navCtrl.push(ModelisationBienvenuePage);
  }

}
