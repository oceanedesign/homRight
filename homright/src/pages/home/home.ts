import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{StatsVue_3dPage} from "../stats-vue-3d/stats-vue-3d";
import { LottieAnimationViewModule } from 'ng-lottie';
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
  lottieConfig:any;
  splash = true;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    LottieAnimationViewModule.forRoot();
      this.lottieConfig={
        path:'assets/imgs/splashScreen/data.json',
        autoplay: true,
        loopt: true

      }
  }

  ionViewDidLoad() {
  	this.updateRoutines;
  }
  creerScene(){
  	//this.navCtrl.push(creerScenePage);
  }

  pushEvent(){
    this.navCtrl.push(EventsPage);
  }

  pushMenu(){
    this.navCtrl.push(TabsPage);
  }

	updateRoutines(value: string){
	this.orderBy = value;
	}

	directionStat3D(){
	this.navCtrl.push(StatsVue_3dPage);
	}

  presentToast() {
    //Définit le message de refus d'achat dû à un manque de points
    let toast = this.toastCtrl.create({
        message: "Bravo ! Vous avez gagné 10 points supplémentaires !",
        duration: 3000
      });
    toast.present();
  }

}