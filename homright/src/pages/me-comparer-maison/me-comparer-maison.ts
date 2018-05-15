import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var JQuery:any;
declare var $:any;

@IonicPage()
@Component({
  selector: 'page-me-comparer-maison',
  templateUrl: 'me-comparer-maison.html',
})
export class MeComparerMaisonPage {

  pseudo: string;
  consommation;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pseudo = navParams.get('data1');
    this.consommation = navParams.get('data2');
  }

  openProfil(){
    //Fonction permettant d'ouvrir le profil du bon élève
    console.log("ok2");
    $(".profil-bon-eleve").removeClass("hidden-profil");
    $(".profil").css('z-index','0');
  }

  closeProfil(){
    //Fonction permettant de fermer le profil du bon éleve
    console.log("ok");
    // $(".profil-bon-eleve").css('display','none');
    $(".profil-bon-eleve").addClass("hidden-profil");
    $(".profil").css('z-index','2');
  }

    retourEcran(){
    //Fonction permettant de retourner à la page principale de comparaison
    this.navCtrl.pop();
  }
}
