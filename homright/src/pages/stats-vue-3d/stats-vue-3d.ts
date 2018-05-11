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

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsVue_3dPage');
  }

  directionJeu(){
	this.navCtrl.push(JeuModelisationPage);  	
  }
  directionConsoTypePiece(typePiece){
    typePiece = typePiece;
    this.navCtrl.push(ConsoPage, {
      data:typePiece
    });
  }

  pushMenu(){
    this.navCtrl.push(TabsPage);
  }
}
