import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import{SignupPage} from "../signup/signup";
import { TabsPage } from '../tabs/tabs';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


//import { LottieAnimationViewModule } from 'ng-lottie';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	name:'page-login'
	})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	tabBarElement: any;
  public lottieConfig:Object;
  splash = true;
	connexionType: string ="connexion";

  users: String;

  regData = {"pseudo":"", "password":"", "nom": "", "prenom": "","email": ""};


  	constructor(public navCtrl: NavController, public authServiceProvider : AuthServiceProvider) {
  		this.lottieConfig={
  			path:'assets/imgs/splashScreen/data.json',
  			autoplay: true,
  			loopt: true

  		}
  }

  ngOnInit(){
    this.authServiceProvider.getUsers().subscribe(
      data=>{
        this.users=data.users;
        console.log(data);
      },
      error=>{
        console.log(error);
      })
  }


  doSignup() {
    console.log(this.regData);
    this.authServiceProvider.postData(this.regData,'signup/').then((result) => {
      console.log("ça maaarche");
       this.navCtrl.push(SignupPage);
    }, (error) => {
        console.log("ça ne marche pas");
    });
  }


  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    }, 5500);
  }

  signup(){
  }


  connexion(){
  	this.navCtrl.push(TabsPage);
  }

}