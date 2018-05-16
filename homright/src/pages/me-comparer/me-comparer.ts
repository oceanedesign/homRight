import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";
import { MeComparerMaisonPage } from '../me-comparer-maison/me-comparer-maison';


@IonicPage()
@Component({
  selector: 'page-me-comparer',
  templateUrl: 'me-comparer.html',
})
export class MeComparerPage {

  eleves = [
  {"id":0, "avatar":"A775FF", "pseudo":"Axol", "niveau":15, "consommation":"10", "badges":"15" },
  {"id":1, "avatar":"D8A38C", "pseudo":"Lywie", "niveau":10, "consommation":"10.42", "badges":"9" },
  {"id":2, "avatar":"FFEDB8", "pseudo":"Alain", "niveau":12, "consommation":"12.8", "badges":"11" },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushMenu(){
    //Fonction permettant d'activer le menu
    this.navCtrl.push(TabsPage);
  }

  directionComparerMaison(pseudo, consommation){
    //Envoie les données "id" à la page suivante (sous-catégorie de la comparaison entre joueurs)
    this.navCtrl.push(MeComparerMaisonPage, {
      data1:pseudo, data2:consommation
    });
    console.log(pseudo, consommation);
  }

}
