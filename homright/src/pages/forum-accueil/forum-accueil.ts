import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";
import { ForumChoixThemePage } from '../forum-choix-theme/forum-choix-theme';

@IonicPage()
@Component({
  selector: 'page-forum-accueil',
  templateUrl: 'forum-accueil.html',
})
export class ForumAccueilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushMenu(){
    //Fonction permettant l'ouverture du menu
    this.navCtrl.push(TabsPage);
  }
  pushChoixTheme(typePiece){
    //Envoie les données "type de piece" à la page suivante (sous-catégorie du forum)
    typePiece = typePiece;
    this.navCtrl.push(ForumChoixThemePage, {
      data:typePiece
    });
  }

}
