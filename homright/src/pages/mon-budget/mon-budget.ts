import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";

 declare var JQuery:any;
 declare var $:any;
 import 'jquery-ui-dist/jquery-ui';

@IonicPage()
@Component({
  selector: 'page-mon-budget',
  templateUrl: 'mon-budget.html',
})
export class MonBudgetPage {

  temperature: number= 20;
  // valueObjet: String;
  // regPiece = {"nomPiece": "", "type":"", "temperature":""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonBudgetPage');
  }

  retourMenu(){
    this.navCtrl.pop();
  }

}
