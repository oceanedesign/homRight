import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SynchroFaitePage } from '../synchro-faite/synchro-faite';
/**
 * Generated class for the SynchroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-synchro',
  templateUrl: 'synchro.html',
})
export class SynchroPage {

  maisonData = {"compt_linky":""};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SynchroPage');
  }

  synchronisationFaiteCompteur(){
        this.navCtrl.push(SynchroFaitePage);
  }

}
