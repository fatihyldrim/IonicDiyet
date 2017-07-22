import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeniaraPage } from './beniara';

@NgModule({
  declarations: [
    BeniaraPage,
  ],
  imports: [
    IonicPageModule.forChild(BeniaraPage),
  ],
  exports: [
    BeniaraPage
  ]
})
export class BeniaraPageModule {}
