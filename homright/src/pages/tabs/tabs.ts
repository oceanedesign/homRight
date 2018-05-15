import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConsoPage } from '../conso/conso';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';
import{EventsPage} from "../events/events";
import { MonFournisseurPage } from '../mon-fournisseur/mon-fournisseur';
import { ForumAccueilPage } from '../forum-accueil/forum-accueil';
import { BoutiquePage} from '../boutique/boutique';
import { JeuModelisationPage} from '../jeu-modelisation/jeu-modelisation';
import { MonBudgetPage } from '../mon-budget/mon-budget';
import { MeComparerPage } from '../me-comparer/me-comparer';
import { DemenagementPage } from '../demenagement/demenagement';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ToastController } from 'ionic-angular';

declare var jQuery:any;
declare var $:any;

@Component({
	selector: 'tabs',
  	templateUrl: 'tabs.html'
})
export class TabsPage {

  userData = this.authServiceProvider.pseudo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider : AuthServiceProvider, public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    console.log(this.authServiceProvider.pseudo);
  }

  directionAccueil(){
    this.navCtrl.push(HomePage);
  }

  maMaison(){
    $(".menu-principal").css("display", "none");
    $(".sous-menu").css("display", "block");
  }

  retour(){
    $(".menu-principal").css("display", "block");
    $(".sous-menu, .profilSection.sous-menu").css("display", "none");
  }

  editProfil(){}

  directionEvent(){
    //Fonction permettant d'amener à la page des évenements
    this.navCtrl.push(EventsPage);
  }

  directionFournisseur(){
    //Fonction permettant d'amener à la page de gestion du fournisseur et de son contrat
		this.navCtrl.push(MonFournisseurPage);
  }

  directionComparer(){
    //Pages de comparaison entre utilisateurs
		this.navCtrl.push(MeComparerPage);
	}

  directionModelisation(){
    //Fonction permettant d'amener à la page de modélisation des pieces
    this.navCtrl.push(JeuModelisationPage);

  }

  directionBudget(){
		this.navCtrl.push(MonBudgetPage);
	}

  directionBoutique(){
    //Fonction permettant d'amener à la boutique
    this.navCtrl.push(BoutiquePage);
  }

  directionForum(){
    //Fonction permettant d'amener au forum
		this.navCtrl.push(ForumAccueilPage);
  }


  directionContact(){
    this.navCtrl.push(ContactPage);
  }

  directionBadges(){
    //Fonction permettant d'amener à la page de contact
    this.presentToastBadges();
  }

  presentToastBadges() {
    //Définit un message "lorsqu'un utilisateur clique sur le bouton des badges
    let toast = this.toastCtrl.create({
        message: "Vous n'avez pour le moment pas de badges. Participez à des événements pour en gagner !",
        duration: 3000
      });
    toast.present();
  }

  directionPoints(){
    this.presentToastPoints();
  }


  presentToastPoints() {
    //Définit le message "Vous n'avez effectué aucune transaction." lorsqu'un utilisateur 
    //Clique sur le bouton des points
    let toast = this.toastCtrl.create({
        message: "Vous n'avez effectué aucune transaction.",
        duration: 3000
      });
    toast.present();
  }

  directionParametre(){}

  directionDemenagement(){
  //Fonction permettant d'amener à la page de déménagement
    this.navCtrl.push(DemenagementPage);
  }

  retourMenu(){
    //Fonction permettant de fermer le menu
  	this.navCtrl.pop();
  }

}
