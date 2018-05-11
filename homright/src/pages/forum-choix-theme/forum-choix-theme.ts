import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForumDiscussionPage } from '../forum-discussion/forum-discussion';
import{TabsPage} from "../tabs/tabs";

declare var jQuery:any;
declare var $:any;


@IonicPage()
@Component({
  selector: 'page-forum-choix-theme',
  templateUrl: 'forum-choix-theme.html',
})
export class ForumChoixThemePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumChoixThemePage');
  }

  pushMenu(){
    this.navCtrl.push(TabsPage);
  }

  nouveauTheme(){
      //Ouvre la pop up d'édition de la pièce

    $(".fond-cache").css("display", "flex");

    // var bouton = event.target.closest('button'); //Définit la variable bouton et attribut le bouton
    // console.log($(bouton).attr('value')); //récupération de l'attribut "value" du bouton
    // this.regPiece.nomPiece = $(bouton).attr('value') ; //Attribut la nouvelle valeur

  }
  returnChoose(){
    //Ferme la pop up sans validation
    $(".fond-cache").css("display", "none");
  }

  pushDiscussion(){
    this.navCtrl.push(ForumDiscussionPage);
  }

  validerChoix(){
    //Ajout de la piece
    $(".fond-cache").css("display", "none");

  }

}
