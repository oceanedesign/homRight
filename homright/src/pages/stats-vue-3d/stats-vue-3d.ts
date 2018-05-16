import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{JeuModelisationPage} from "../jeu-modelisation/jeu-modelisation";
import{TabsPage} from "../tabs/tabs";
import{ConsoPage} from "../conso/conso";

@IonicPage()
@Component({
  selector: 'page-stats-vue-3d',
  templateUrl: 'stats-vue-3d.html',
})
export class StatsVue_3dPage {
  consoType: string ="vue3D";
  statsType: string ="semaine";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  directionJeu(){
    //Fonction menant vers la modélisation
	this.navCtrl.push(JeuModelisationPage);  	
  }

  directionConsoTypePiece(typePiece){
    //Fonction menant vers l'écran de consommation d'une piece avec comme parametre le type de la piece
    typePiece = typePiece;
    this.navCtrl.push(ConsoPage, {
      data:typePiece
    });
  }

  pushMenu(){
    //Fonction permettant l'ouverture du menu principal
    this.navCtrl.push(TabsPage);
  }
}
