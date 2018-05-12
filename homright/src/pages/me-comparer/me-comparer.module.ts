import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeComparerPage } from './me-comparer';

@NgModule({
  declarations: [
    MeComparerPage,
  ],
  imports: [
    IonicPageModule.forChild(MeComparerPage),
  ],
})
export class MeComparerPageModule {}
