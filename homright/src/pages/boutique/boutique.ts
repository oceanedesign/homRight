import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";
import { ToastController } from 'ionic-angular';

declare var $:any;

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
	  	{id:1, nom: 'Prise connectée', marque: 'Osram', prix: 19.99,
	  	coupon:0,
	  	img :"../assets/imgs/boutique/item2.png" , 
	  	note :"../assets/imgs/boutique/note1.png" 
	  	},
	  	{id:2, nom: 'Thermostat', marque: 'Huawei', prix: 159.99,
	  	coupon:0,
	  	img :"../assets/imgs/boutique/item3.png" , 
	  	note :"../assets/imgs/boutique/note1.png" 
	  	},
	  	{id:3, nom: 'Réfrigérateur connecté', marque: 'Samsung', prix: 4499.99,
	  	coupon:1,
	  	img :"../assets/imgs/boutique/item4.png" , 
	  	note :"../assets/imgs/boutique/note4.png" 
	  	},
	];

	pushMenu(){
		//Fonction menant au menu principal
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

	showItem(){
    	$(".disparition").css("display", "none");
    	$(".apparition").css("display", "flex");
	}
}
