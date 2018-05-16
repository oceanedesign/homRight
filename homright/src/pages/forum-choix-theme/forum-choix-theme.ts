import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForumDiscussionPage } from '../forum-discussion/forum-discussion';
import{TabsPage} from "../tabs/tabs";

declare var $:any;


@IonicPage()
@Component({
  selector: 'page-forum-choix-theme',
  templateUrl: 'forum-choix-theme.html',
})
export class ForumChoixThemePage {
  typePiece: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.typePiece = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log(this.typePiece);
  }

  pushMenu(){
    this.navCtrl.push(TabsPage);
  }

  nouveauTheme(){
    $(".fond-cache").css("display", "flex");
  }
  returnChoose(){
    //Ferme la pop up sans validation
    $(".fond-cache").css("display", "none");
  }

  pushDiscussion(){
    //Mene vers le forum partie discussion
    this.navCtrl.push(ForumDiscussionPage);
  }

  validerChoix(){
    //Ferme le pop up apres validation
    $(".fond-cache").css("display", "none");
  }
  getTypepiece(){
    var typePiece = $(this).text();
    console.log(typePiece);
  }
}
