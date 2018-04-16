import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { SynchroPage } from '../pages/synchro/synchro';
import { SignupPage } from '../pages/signup/signup';
import { JeuModelisationPage } from '../pages/jeu-modelisation/jeu-modelisation';

import { HomePage } from '../pages/home/home';

import { PointsClesPage } from '../pages/points-cles/points-cles';
import { ModelisationBienvenuePage } from '../pages/modelisation-bienvenue/modelisation-bienvenue';
import { PreModelisationPage } from '../pages/pre-modelisation/pre-modelisation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //rootPage:any = JeuModelisationPage;
  rootPage:any = PointsClesPage;
  //rootPage:any = PreModelisationPage;
  //rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
