import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import{SignupPage} from "../signup/signup";
import { TabsPage } from '../tabs/tabs';

import { LottieAnimationViewModule } from 'ng-lottie';
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
  public lottieConfig:Object;
  splash = true;

  constructor(public navCtrl: NavController) {
  	this.lottieConfig={
  		path:'assets/imgs/splashScreen/data.json',
  		autoplay: true,
  		loopt: true

  	}
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    }, 5500);
  }

  signup(){
  	this.navCtrl.push(SignupPage);
  }

  connexion(){
  	this.navCtrl.push(TabsPage);
  }

}