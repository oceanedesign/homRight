import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{SynchroPage} from "../synchro/synchro";
import { ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

declare var $:any;

@IonicPage()
@Component({
  selector: 'page-creer-maison',
  templateUrl: 'creer-maison.html',
})
export class CreerMaisonPage {

  maisonData = {"nom":""};

  constructor(public navCtrl: NavController, public navParams: NavParams,  public authServiceProvider : AuthServiceProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreerMaisonPage');
    console.log(this.authServiceProvider.token);
  }

  creerMaison(){
    //Fonction permettant d'ajouter une maison à la bdd
    if(this.maisonData.nom == ""){
      //Si le champ est vide
      this.presentToast();
      //Transmettre un message à l'utilisateur
    }else{

    //Envoi au serveur le json   
    this.authServiceProvider.postDataWithToken(this.maisonData,'home/create.php').then((result) => {
      console.log("J'ai envoyé les donnees.")
      console.log(this.maisonData);
      this.navCtrl.push(SynchroPage);
    }, (error) => {
      //erreur coté serveur
        console.log(error);
        console.log("ça ne marche pas");
    });

    }
  }

  ajoutMembres(){
    //Fonction permettant d'ajouter des input pour d'autres invitations
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