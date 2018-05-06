import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-boutique',
  templateUrl: 'boutique.html',
})
export class BoutiquePage {

	boutiqueType: string ="shop";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

	coupons = [
	  	{id:0, nom: 'Il fait chaud ?', points: 500,
	  	img :"../assets/imgs/coupons/plants.png" , 
	  	description: '-30% sur tous les thermostats connectés de la boutique ! Quelque soit leur marque et prix !'
		},

	  	{ id:1, nom: 'Oh, la belle prise ! ', points: 300, 
	  	img :'../assets/imgs/coupons/plug.png' ,
	  	description: 'Une prise connectée achetée, une prise offerte ! Uniquement pour les prises de la marque Osram présentes sur la boutique.'
		}
	];

	items = [
	  	{id:0, nom: 'Thermostat', marque: 'Nest', prix: 249.99,
	  	coupon:0,
	  	img :"../assets/imgs/boutique/item1.png" , 
	  	note :"../assets/imgs/boutique/note1.png" 
	  	},
	];

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoutiquePage');
  }
  pushMenu(){
    this.navCtrl.push(TabsPage);
  }


  presentToast() {
  	//Définit le message de refus d'achat dû à un manque de points
    let toast = this.toastCtrl.create({
      message: "Vous n'avez pas assez de points pour acheter ce coupon",
      duration: 3000
    });
    toast.present();
  }

}
