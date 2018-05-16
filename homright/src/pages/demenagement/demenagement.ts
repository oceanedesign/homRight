import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import{SignupPage} from "../signup/signup";
import { HomePage } from '../home/home';

@Component({
  selector: 'page-demenagement',
  templateUrl: 'demenagement.html',
})
export class DemenagementPage {

  maisonData = {"voie":"41 rue Guynemer", "immeuble": "Résidence Arc-en-ciel","bp": "Appartement 220","cp": "93200", "ville" : "Saint Denis"};
  namesHouse: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider : AuthServiceProvider) {
   this.initializeNamesHouse();
  }

  initializeNamesHouse() {
    //Recupere l'adresse de l'utilisateur en fonction de son token
    this.authServiceProvider.getAdress().subscribe(
      data=>{
        this.namesHouse=data.addresses;
        //console.log(data);
        console.log(this.namesHouse);
      },
      error=>{
        console.log(error);
    })
  }

  changementMaison(){
    //Fonction permettant de mener vers la page "créer ou rejoindre une maison"
  	this.navCtrl.push(SignupPage);
  }
  pushAccueil(){
    //fonction menant vers l'accueil principal
    this.navCtrl.push(HomePage);
  }

}
