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
  	this.navCtrl.push(ModelisationBienvenuePage);
  }

}
