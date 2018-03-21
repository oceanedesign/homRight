import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { RejoindreMaisonPage } from '../pages/rejoindre-maison/rejoindre-maison';
import { CreerMaisonPage } from '../pages/creer-maison/creer-maison';
import { SynchroPage } from '../pages/synchro/synchro';

import { ConsoPage } from '../pages/conso/conso';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProfilPage } from '../pages/profil/profil';
import { TabsPage } from '../pages/tabs/tabs';

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
    LottieAnimationViewModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage, RejoindreMaisonPage, CreerMaisonPage,
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
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
