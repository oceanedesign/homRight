import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";

declare var $:any;

@Component({
  selector: 'page-conso',
  templateUrl: 'conso.html'
})
export class ConsoPage {
	typePiece: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Recupere les données envoyées par la page précédente
  	this.typePiece = navParams.get('data');
  }

    ionViewDidLoad() {
    console.log(this.typePiece);
    if(this.typePiece=="Cuisine"){
    	$('.cuisine').css("display", "block");
    	$('.autre').css("display", "none");
    }else{
    	$('.autre').css("display", "block");
    	$('.cuisine').css("display", "none");
    }
  }

  pushMenu(){
    //Fonction permettant d'acceder au menu
    this.navCtrl.push(TabsPage);
  }

}
