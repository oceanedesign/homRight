import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";
import { ForumChoixThemePage } from '../forum-choix-theme/forum-choix-theme';

declare var jQuery:any;
declare var $:any;

@IonicPage()
@Component({
  selector: 'page-forum-accueil',
  templateUrl: 'forum-accueil.html',
})
export class ForumAccueilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumAccueilPage');
  }

  pushMenu(){
    this.navCtrl.push(TabsPage);
  }
  pushChoixTheme(){
    this.navCtrl.push(ForumChoixThemePage);
  }

}
