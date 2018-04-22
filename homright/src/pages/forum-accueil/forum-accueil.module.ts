import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumAccueilPage } from './forum-accueil';

@NgModule({
  declarations: [
    ForumAccueilPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumAccueilPage),
  ],
})
export class ForumAccueilPageModule {}
