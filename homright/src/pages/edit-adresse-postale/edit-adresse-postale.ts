import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SynchroFaitePage } from '../synchro-faite/synchro-faite';

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
    //Fonction permettant de retourner sur la page précédente
  	this.navCtrl.push(SynchroFaitePage);
  }

}
