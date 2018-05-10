import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumDiscussionPage } from './forum-discussion';

@NgModule({
  declarations: [
    ForumDiscussionPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumDiscussionPage),
  ],
})
export class ForumDiscussionPageModule {}
