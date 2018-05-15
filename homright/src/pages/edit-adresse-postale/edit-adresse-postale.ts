import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { SynchroFaitePage } from '../synchro-faite/synchro-faite';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-adresse-postale',
  templateUrl: 'edit-adresse-postale.html',
})
export class EditAdressePostalePage {

  maisonData = {"voie":"",
   "immeuble": "","bp": "","cp": "", "ville" : ""};

  namesHouse: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider : AuthServiceProvider, public toastCtrl: ToastController) {
   this.initializeNamesHouse();
  }


  initializeNamesHouse() {
    this.authServiceProvider.getAdress().subscribe(
      data=>{
        this.namesHouse=data.addresses;
        console.log(data);
        console.log(this.namesHouse);
        this.maisonData = this.namesHouse[0];
      },
      error=>{
        console.log(error);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAdressePostalePage');
     //this.maisonData.voie = this.namesHouse[0].voie;
  }

  adressePostaleValidee(){
    //Fonction permettant de retourner sur la page précédente et valider la mise à jour
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


  presentToastCompteur() {
    //Définit le message lorsqu'un utilisateur essaye de mettre des données erronées
    let toast = this.toastCtrl.create({
        message: "Données incorrecte",
        duration: 3000
      });
    toast.present();
  }

}
