import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnlinediyetPage } from './onlinediyet';

@NgModule({
  declarations: [
    OnlinediyetPage,
  ],
  imports: [
    IonicPageModule.forChild(OnlinediyetPage),
  ],
  exports: [
    OnlinediyetPage
  ]
})
export class OnlinediyetPageModule {}
