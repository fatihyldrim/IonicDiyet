import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UygulamalarPage } from './uygulamalar';

@NgModule({
  declarations: [
    UygulamalarPage,
  ],
  imports: [
    IonicPageModule.forChild(UygulamalarPage),
  ],
  exports: [
    UygulamalarPage
  ]
})
export class UygulamalarPageModule {}
