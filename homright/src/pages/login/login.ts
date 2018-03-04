import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import{SignupPage} from "../signup/signup";
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    }, 5000);
  }

  signup(){
  	this.navCtrl.push(SignupPage);
  }

  connexion(){
  	this.navCtrl.push(TabsPage);
  }

}