import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WpdetayPage } from './wpdetay';

@NgModule({
  declarations: [
    WpdetayPage,
  ],
  imports: [
    IonicPageModule.forChild(WpdetayPage),
  ],
  exports: [
    WpdetayPage
  ]
})
export class WpdetayPageModule {}
