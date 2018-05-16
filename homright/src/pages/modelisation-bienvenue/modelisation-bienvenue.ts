import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LottieAnimationViewModule } from 'ng-lottie'; 
import { PreModelisationPage } from '../pre-modelisation/pre-modelisation';
import { HomePage } from '../home/home';

declare var $:any;

@IonicPage()
@Component({
  selector: 'page-modelisation-bienvenue',
  templateUrl: 'modelisation-bienvenue.html',
})
export class ModelisationBienvenuePage {

  lottieConfig:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Permet de mettre en place l'animation de Homie
    LottieAnimationViewModule.forRoot(); 
    this.lottieConfig={ 
      path:'assets/imgs/perdu/data.json', 
      autoplay: true, 
      loopt: true 
    }
  }


  modeliserMaison(){
    //Fonction permettant d'aller vers l'écran de construction des pieces
    this.navCtrl.push(PreModelisationPage);
  }
  pasModeliserMaison(){
    //Fonction permettant d'aller vers l'accueil principal
    this.navCtrl.push(HomePage);
  }

  plusTard(){
    //Fonction faisant apparaitre la pop up si l'utilisateur refuse de faire la modélisation
    $(".fond-cache").css("display", "flex");
  }
  returnChoose(){
    //Ferme pop up
    $(".fond-cache").css("display", "none");
  }

}
