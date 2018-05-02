import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

}
