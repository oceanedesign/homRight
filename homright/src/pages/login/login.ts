import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LottieAnimationViewModule } from 'ng-lottie';
import{SignupPage} from "../signup/signup";
import { HomePage } from '../home/home';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Geolocation } from '@ionic-native/geolocation';

//import { LottieAnimationViewModule } from 'ng-lottie';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var jquery:any;
declare var $:any;

@IonicPage({
  name: 'page-login',
  segment: 'page-login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	tabBarElement: any;
  public lottieConfig:any;
  splash = true;
	connexionType: string ="connexion";

  regData = {"pseudo":"", "password":"", "nom": "", "prenom": "","email": "","latitude": "","longitude": ""};
  latitude : any;
  longitude : any;

  users: String;


  	constructor(public navCtrl: NavController, public authServiceProvider : AuthServiceProvider, public geo: Geolocation) {
    LottieAnimationViewModule.forRoot();
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
      this.latitude = pos.coords.latitude;     
      this.longitude = pos.coords.longitude;
    }).catch(err => console.log(err));
  }

  register() {
    if (! this.latitude) {
        this.latitude = 0;
    }

    if (! this.longitude) {
        this.longitude = 0;
    }
    console.log("test dans doSignup " + this.longitude +" pour la lattitude "+ this.latitude);
    this.regData.latitude = this.latitude;
    this.regData.longitude = this.longitude;
    console.log(this.regData);
    this.authServiceProvider.postData(this.regData,'users/create.php').then((result) => {
      console.log(result);
        if (result.hasOwnProperty("status") && result["status"] == "error") {
            console.log(result["message"]);
        } else {
            console.log("Nop '-'");
        }
      console.log(result["_body"]);
       this.navCtrl.push(SignupPage);
    }, (error) => {
        console.log(error);
        console.log("ça ne marche pas");
    });
  }

  connexion(){
  	this.navCtrl.push(HomePage);
  }

}