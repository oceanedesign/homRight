import { Component } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie'; 
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{RejoindreMaisonPage} from "../rejoindre-maison/rejoindre-maison";
import { CreerMaisonPage } from '../creer-maison/creer-maison';
import {NativePageTransitions, NativeTransitionOptions} from '@ionic-native/native-page-transitions';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage({
	name:'page-signup'
	})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

lottieConfig:any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider : AuthServiceProvider, private nativePageTransitions: NativePageTransitions) {
    //Permet de mettre en place l'animation de Homie
    LottieAnimationViewModule.forRoot(); 
    this.lottieConfig={ 
      path:'assets/imgs/choix/data.json', 
      autoplay: true, 
      loopt: true 
    }
  }

  creerMaison(){
    //fonction menant vers l'écran de création de maison
    let options: NativeTransitionOptions={
    direction: 'up',
    duration: 500
   };
    this.nativePageTransitions.slide(options);
  	this.navCtrl.push(CreerMaisonPage);
  }

  rejoindreMaison(){
    //fonction menant vers l'écran pour rejoindre une maison
  	this.navCtrl.push(RejoindreMaisonPage);
  }

}
