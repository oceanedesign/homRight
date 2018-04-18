import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-conso',
  templateUrl: 'conso.html'
})
export class ConsoPage {
	typePiece: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    this.navCtrl.push(TabsPage);
  }

}
