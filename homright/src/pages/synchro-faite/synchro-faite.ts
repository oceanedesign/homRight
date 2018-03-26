import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{EditAdressePostalePage} from "../edit-adresse-postale/edit-adresse-postale";
/**
 * Generated class for the SynchroFaitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-synchro-faite',
  templateUrl: 'synchro-faite.html',
})
export class SynchroFaitePage {
regData = {"compteur":"15987465"};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SynchroFaitePage');
  }

  editionAdresseP(){
  	this.navCtrl.push(EditAdressePostalePage);  	
  }

}
