import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumChoixThemePage } from './forum-choix-theme';
import { ForumDiscussionPage } from './forum-discussion';

@NgModule({
  declarations: [
    ForumChoixThemePage,
  ],
  imports: [
    IonicPageModule.forChild(ForumChoixThemePage),
  ],
})
export class ForumChoixThemePageModule {}
