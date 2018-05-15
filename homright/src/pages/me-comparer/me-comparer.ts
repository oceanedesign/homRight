import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";
import { MeComparerMaisonPage } from '../me-comparer-maison/me-comparer-maison';

declare var JQuery:any;
declare var $:any;
import 'jquery-ui-dist/jquery-ui';

@IonicPage()
@Component({
  selector: 'page-me-comparer',
  templateUrl: 'me-comparer.html',
})
export class MeComparerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeComparerPage');
  }

  pushMenu(){
    //Fonction permettant d'activer le menu
    this.navCtrl.push(TabsPage);
  }

  directionComparerMaison(){
    this.navCtrl.push(MeComparerMaisonPage);
  }

}
