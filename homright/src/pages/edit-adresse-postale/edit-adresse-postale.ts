import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SynchroFaitePage } from '../synchro-faite/synchro-faite';
/**
 * Generated class for the EditAdressePostalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-adresse-postale',
  templateUrl: 'edit-adresse-postale.html',
})
export class EditAdressePostalePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAdressePostalePage');
  }

  adressePostaleValidee(){
  	this.navCtrl.push(SynchroFaitePage);
  }

}
