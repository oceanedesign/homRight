import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SynchroFaitePage } from '../synchro-faite/synchro-faite';
import { ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-synchro',
  templateUrl: 'synchro.html',
})
export class SynchroPage {

  maisonData = {"compt_linky":""};
  
  constructor(public navCtrl: NavController, public authServiceProvider : AuthServiceProvider, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SynchroPage');
  }

  synchronisationFaiteCompteur(){

    if(this.maisonData.compt_linky == ""){
      //Si le champ est vide
      this.presentToast();
      //Transmettre un message à l'utilisateur
    }else{

      //Envoi au serveur le json   
      this.authServiceProvider.postDataWithToken(this.maisonData,'home/update.php').then((result) => {
          console.log("J'ai envoyé les donnees.")
          console.log(this.maisonData);
          if (JSON.parse(result['_body']).hasOwnProperty("status") && JSON.parse(result['_body']).status == "error") {
            // s'il y a une erreur
              this.presentToastCompteur();
              //prevenir l'utilisateur
          } else {
            this.navCtrl.push(SynchroFaitePage);
            //sinon passer à l'écran suivant
          }

      }, (error) => {
        //erreur coté serveur
          console.log(error);
          console.log("ça ne marche pas");
      });
    }
       
  }

  presentToast() {
    //Définit le message "numéro de compteur linky déjà utilisé" lorsqu'un utilisateur essaye de mettre un numéro de compteur
    // déjà existant dans la base de données
    let toast = this.toastCtrl.create({
        message: "Le numéro de compteur linky doit être défini",
        duration: 3000
      });
    toast.present();
  }

  presentToastCompteur() {
    //Définit le message "numéro de compteur linky déjà utilisé" lorsqu'un utilisateur essaye de mettre un numéro de compteur
    // déjà existant dans la base de données
    let toast = this.toastCtrl.create({
        message: "numéro de compteur linky déjà utilisé",
        duration: 3000
      });
    toast.present();
  }

}
