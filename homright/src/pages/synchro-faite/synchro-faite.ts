import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import{EditAdressePostalePage} from "../edit-adresse-postale/edit-adresse-postale";
import{PointsClesPage} from "../points-cles/points-cles";

@IonicPage()
@Component({
  selector: 'page-synchro-faite',
  templateUrl: 'synchro-faite.html',
})
export class SynchroFaitePage {
  maisonData = {"compt_linky":"", "nom":""};

  namesHouse: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider : AuthServiceProvider) {
   this.initializeNamesHouse();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SynchroFaitePage');
    //console.log("token : "+this.authServiceProvider.token);
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

  editionAdresseP(){
    //Fonction permettant d'aller sur la page d'édition de l'adresse
  	this.navCtrl.push(EditAdressePostalePage);  	
  }

  directionPointsCles(){
    //Fonction menant vers la page des récapitulatifs des hom'right
    this.navCtrl.push(PointsClesPage);    
  }

}
