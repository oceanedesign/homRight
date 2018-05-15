import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{StatsVue_3dPage} from "../stats-vue-3d/stats-vue-3d";
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ToastController } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";
import{EventsPage} from "../events/events";


declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	orderBy:string;
  splash = true;
  userData = this.authServiceProvider.pseudo;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,   public authServiceProvider : AuthServiceProvider) {
  }

  ionViewDidLoad() {
  	this.updateRoutines;
    console.log(this.authServiceProvider.token);
    console.log(this.authServiceProvider.pseudo);
  }

  creerScene(){
  	//this.navCtrl.push(creerScenePage);
  }

  creerSceneImpossible(){
    //Création de la scène impossible car l'utilisateur n'a pas d'objets connectés
    this.presentToastScene();
  }

  pushEvent(){
    //Fonction permettant d'aller à l'écran des evenements
    this.navCtrl.push(EventsPage);
  }

  pushMenu(){
    //Fonction permettant d'activer le menu
    this.navCtrl.push(TabsPage);
  }

	updateRoutines(value: string){
	this.orderBy = value;
	}

	directionStat3D(){
    //Fonction permettant d'aller à la page des statistiques
	  this.navCtrl.push(StatsVue_3dPage);
	}

  presentToast() {
    //Définit le message de gain de points
    let toast = this.toastCtrl.create({
        message: "Bravo ! Vous avez gagné 10 points supplémentaires !",
        duration: 3000
      });
    toast.present();
  }

  presentToastScene() {
    //Définit le message de refus de créer des scènes
    let toast = this.toastCtrl.create({
        message: "Impossible ! Vous n'avez pas d'objets connectés dans votre maison",
        duration: 3000
      });
    toast.present();
  }

  activerSceneImpossible() {
    //Définit le message de refus d'activer des scènes
    let toast = this.toastCtrl.create({
        message: "Vous n'avez pas d'objets connectés : vous ne pouvez pas activer ou éditer ces routines.",
        duration: 3000
      });
    toast.present();
  }

}