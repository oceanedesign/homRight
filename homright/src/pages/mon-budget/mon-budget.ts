import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-mon-budget',
  templateUrl: 'mon-budget.html',
})
export class MonBudgetPage {

  budget: number= 30;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonBudgetPage');
  }

  retourMenu(){
    //Fonction permettant de retouner sur le menu principal
    this.navCtrl.pop();
  }
  pushAccueil(){
    //fonction menant vers l'accueil principal
    this.navCtrl.push(HomePage);
  }

}
