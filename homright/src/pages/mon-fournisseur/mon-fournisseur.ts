import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import{TabsPage} from "../tabs/tabs";

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

  pushAccueil(){
    //fonction menant vers l'accueil principal
    this.navCtrl.push(HomePage);
  }

}
