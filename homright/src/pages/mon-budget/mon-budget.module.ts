import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonBudgetPage } from './mon-budget';

@NgModule({
  declarations: [
    MonBudgetPage,
  ],
  imports: [
    IonicPageModule.forChild(MonBudgetPage),
  ],
})
export class MonBudgetPageModule {}
