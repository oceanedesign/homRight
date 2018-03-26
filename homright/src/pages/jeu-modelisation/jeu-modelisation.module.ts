import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JeuModelisationPage } from './jeu-modelisation';

@NgModule({
  declarations: [
    JeuModelisationPage,
  ],
  imports: [
    IonicPageModule.forChild(JeuModelisationPage),
  ],
})
export class JeuModelisationPageModule {}
