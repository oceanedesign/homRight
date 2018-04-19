import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MonFournisseurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mon-fournisseur',
  templateUrl: 'mon-fournisseur.html',
})
export class MonFournisseurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonFournisseurPage');
  }

  onChangeFournisseur(){
    $( ".contrat.transparency" ).removeClass("transparency");
  }
  onChangeContrat(){

  }

}
