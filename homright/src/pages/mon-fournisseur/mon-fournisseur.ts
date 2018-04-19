import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{TabsPage} from "../tabs/tabs";

/**
 * Generated class for the MonFournisseurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var JQuery:any;
 declare var $:any;
 import 'jquery-ui-dist/jquery-ui';

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

  retourMenu(){
    this.navCtrl.pop();
  }

}
