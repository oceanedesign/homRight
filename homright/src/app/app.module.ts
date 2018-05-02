import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import {NativePageTransitions} from '@ionic-native/native-page-transitions';


import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { RejoindreMaisonPage } from '../pages/rejoindre-maison/rejoindre-maison';
import { CreerMaisonPage } from '../pages/creer-maison/creer-maison';
import { SynchroPage } from '../pages/synchro/synchro';
import { SynchroFaitePage } from '../pages/synchro-faite/synchro-faite';
import { EditAdressePostalePage } from '../pages/edit-adresse-postale/edit-adresse-postale';
import { PointsClesPage } from '../pages/points-cles/points-cles';
import { JeuModelisationPage } from '../pages/jeu-modelisation/jeu-modelisation';
import { ModelisationBienvenuePage } from '../pages/modelisation-bienvenue/modelisation-bienvenue';
import { PreModelisationPage } from '../pages/pre-modelisation/pre-modelisation';
import { StatsVue_3dPage } from '../pages/stats-vue-3d/stats-vue-3d';
import { EventsPage } from '../pages/events/events';

import { ConsoPage } from '../pages/conso/conso';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProfilPage } from '../pages/profil/profil';
import { TabsPage } from '../pages/tabs/tabs';

import { MonFournisseurPage } from '../pages/mon-fournisseur/mon-fournisseur';
import { ForumAccueilPage } from '../pages/forum-accueil/forum-accueil';
import { ForumChoixThemePage } from '../pages/forum-choix-theme/forum-choix-theme';

import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LottieAnimationViewModule } from 'ng-lottie';

import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage, RejoindreMaisonPage,CreerMaisonPage,
    SynchroFaitePage, EditAdressePostalePage, PointsClesPage, ModelisationBienvenuePage, PreModelisationPage, MonFournisseurPage,
    JeuModelisationPage, StatsVue_3dPage, EventsPage, ForumAccueilPage, ForumChoixThemePage,
    SynchroPage,
    ConsoPage,
    ContactPage,
    HomePage,
    ProfilPage,
    TabsPage
  ],
  imports: [
    BrowserModule, HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
    LottieAnimationViewModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage, RejoindreMaisonPage, CreerMaisonPage,
    SynchroFaitePage, EditAdressePostalePage, PointsClesPage, ModelisationBienvenuePage, PreModelisationPage, MonFournisseurPage,
    JeuModelisationPage, StatsVue_3dPage, EventsPage, ForumAccueilPage, ForumChoixThemePage,
    SynchroPage,
    ConsoPage,
    ContactPage,
    HomePage,
    ProfilPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen, AuthServiceProvider,
    Geolocation,
    SQLite,ScreenOrientation,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
