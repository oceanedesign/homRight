import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";



@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

	eventType: string ="eventApp";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  pushMenu(){
    this.navCtrl.push(TabsPage);
  }

}
