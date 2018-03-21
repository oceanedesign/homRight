import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import{SignupPage} from "../signup/signup";
import { TabsPage } from '../tabs/tabs';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Geolocation } from '@ionic-native/geolocation';

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

  regData = {"pseudo":"", "password":"", "nom": "", "prenom": "","email": "","lat": "","lng": ""};
  lat : any;
  lng : any;

  users: String;


  	constructor(public navCtrl: NavController, public authServiceProvider : AuthServiceProvider, public geo: Geolocation) {
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


  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    }, 5500);
      this.geo.getCurrentPosition().then(pos=>{
      this.lat = pos.coords.latitude;     
      this.lng = pos.coords.longitude;
    }).catch(err => console.log(err));
  }

  doSignup() {
    console.log("test dans doSignup " + this.lng +" pour la lattitude "+ this.lat);
    this.regData.lat = this.lat;
    this.regData.lng = this.lng;
    console.log(this.regData);
    this.authServiceProvider.postData(this.regData,'signup/').then((result) => {
      console.log("ça maaarche");
       this.navCtrl.push(SignupPage);
    }, (error) => {
        console.log("ça ne marche pas");
    });
  }

  connexion(){
  	this.navCtrl.push(TabsPage);
  }

}