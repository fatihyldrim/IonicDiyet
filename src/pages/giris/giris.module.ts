import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GirisPage } from './giris';

@NgModule({
  declarations: [
    GirisPage,
  ],
  imports: [
    IonicPageModule.forChild(GirisPage),
  ],
  exports: [
    GirisPage
  ]
})
export class GirisPageModule {}
