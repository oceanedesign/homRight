import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var JQuery:any;
declare var $:any;
import 'jquery-ui-dist/jquery-ui';

@IonicPage()
@Component({
  selector: 'page-me-comparer-maison',
  templateUrl: 'me-comparer-maison.html',
})
export class MeComparerMaisonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeComparerMaisonPage');
  }

  openProfil(){
    console.log("ok2");
    $(".profil-bon-eleve").removeClass("hidden-profil");
    $(".profil").css('z-index','0');
  }

  closeProfil(){
    console.log("ok");
    // $(".profil-bon-eleve").css('display','none');
    $(".profil-bon-eleve").addClass("hidden-profil");
    $(".profil").css('z-index','2');
  }
}
