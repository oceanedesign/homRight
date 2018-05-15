import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import{SynchroFaitePage} from "../synchro-faite/synchro-faite";
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the RejoindreMaisonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rejoindre-maison',
  templateUrl: 'rejoindre-maison.html',
})
export class RejoindreMaisonPage {

  users: String;
  namesHouse: any;
  hideElement: false;

  maisonData={"nom":""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider : AuthServiceProvider, public toastCtrl: ToastController) {
   this.initializeNamesHouse();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RejoindreMaisonPage');
    console.log(this.namesHouse);
  }


  initializeNamesHouse() {
    this.authServiceProvider.getHomes().subscribe(
      data=>{
        this.namesHouse=data.names;
        console.log(data);
        console.log(this.namesHouse);
      },
      error=>{
        console.log(error);
    })
  }

  getNameHouse(ev: any) {
    // Reset items back to all of the namesHouse

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.namesHouse = this.namesHouse.filter((nameHouse) => {
        return (nameHouse.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  synchronisationFaiteCompteur(){
    if(this.maisonData.nom == ""){
      this.presentToast();
    }else{
      //Envoi au serveur le json    
      this.authServiceProvider.postDataWithToken(this.maisonData,'home/join.php').then((result) => { 
        console.log("J'ai envoyé les donnees.") 
        console.log(this.authServiceProvider.token); 
        if (JSON.parse(result['_body']).hasOwnProperty("status") && JSON.parse(result['_body']).status == "error") { 
            // s'il y a une erreur 
              this.presentToastHouseNotExisted(); 
              //prevenir l'utilisateur 
        } else { 
             
          console.log(this.maisonData); 
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
    //Définit le message de refus d'achat dû à un manque de points
    let toast = this.toastCtrl.create({
        message: "Choisissez une maison !",
        duration: 3000
      });
    toast.present();
  }

  presentToastHouseNotExisted() { 
    //Définit le message de refus de créer une maison alors qu'il doit en rejoindre une 
    let toast = this.toastCtrl.create({ 
        message: "Ce nom de maison n'existe pas.", 
        duration: 3000 
      }); 
    toast.present(); 
  }   
  
}
