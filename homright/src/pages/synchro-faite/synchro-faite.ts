import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{EditAdressePostalePage} from "../edit-adresse-postale/edit-adresse-postale";
import{PointsClesPage} from "../points-cles/points-cles";

@IonicPage()
@Component({
  selector: 'page-synchro-faite',
  templateUrl: 'synchro-faite.html',
})
export class SynchroFaitePage {
  maisonData = {"compt_linky":"", "nom":""};



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SynchroFaitePage');
  }

  editionAdresseP(){
  	this.navCtrl.push(EditAdressePostalePage);  	
  }

  directionPointsCles(){
    this.navCtrl.push(PointsClesPage);    
  }

}
