import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SorucevapPage } from './sorucevap';

@NgModule({
  declarations: [
    SorucevapPage,
  ],
  imports: [
    IonicPageModule.forChild(SorucevapPage),
  ],
  exports: [
    SorucevapPage
  ]
})
export class SorucevapPageModule {}
