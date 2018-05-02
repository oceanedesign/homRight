import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { JeuModelisationPage } from '../pages/jeu-modelisation/jeu-modelisation';

import { HomePage } from '../pages/home/home';
import { ModelisationBienvenuePage } from '../pages/modelisation-bienvenue/modelisation-bienvenue';
import { PreModelisationPage } from '../pages/pre-modelisation/pre-modelisation';
import { MonFournisseurPage } from '../pages/mon-fournisseur/mon-fournisseur';
import { ForumAccueilPage } from '../pages/forum-accueil/forum-accueil';
import { ForumChoixThemePage } from '../pages/forum-choix-theme/forum-choix-theme';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //rootPage:any = LoginPage;
  //rootPage:any = PreModelisationPage;
  rootPage:any = HomePage;
  //rootPage:any = ForumAccueilPage;
  //rootPage:any = ForumChoixThemePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
