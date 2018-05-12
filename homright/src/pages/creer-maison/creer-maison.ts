import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{SynchroPage} from "../synchro/synchro";
import { ToastController } from 'ionic-angular';


declare var jquery:any;
declare var $:any;

@IonicPage()
@Component({
  selector: 'page-creer-maison',
  templateUrl: 'creer-maison.html',
})
export class CreerMaisonPage {

  maisonData = {"nom":""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreerMaisonPage');
  }

  synchronisationCompteur(){
    if(this.maisonData.nom == ""){
      this.presentToast();
    }else{
      console.log(this.maisonData);
      this.navCtrl.push(SynchroPage);
    }
  }

  ajoutMembres(){
    console.log("test ajout membres");
    $('#list-membre').append('<ion-item class="item item-block item-md item-input"><div class="item-inner"><div class="input-wrapper"><ion-input name="mail_membre" placeholder="membre@contact.com" type="text" class="input input-md" ng-reflect-type="text" ng-reflect-placeholder="membre@contact.com"><input class="text-input text-input-md" dir="auto" ng-reflect-klass="text-input" ng-reflect-ng-class="text-input-md" type="text" aria-labelledby="lbl-1" autocomplete="off" autocorrect="off" placeholder="membre@contact.com" name="mail_membre" ng-reflect-type="text" ng-reflect-placeholder="membre@contact.com"></ion-input></div></div><div class="button-effect"></div></ion-item>'); 
  }


  presentToast() {
    //Définit le message de refus d'achat dû à un manque de points
    let toast = this.toastCtrl.create({
        message: "Choisissez un nom à votre maison.",
        duration: 3000
      });
    toast.present();
  }
  
}