import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{StatsVue_3dPage} from "../stats-vue-3d/stats-vue-3d";
import { LottieAnimationViewModule } from 'ng-lottie';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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
  constructor(public navCtrl: NavController) {
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

  }

	updateRoutines(value: string){
	this.orderBy = value;
	}

	directionStat3D(){
	this.navCtrl.push(StatsVue_3dPage);
	}
}