import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SagliklitariflerPage } from './sagliklitarifler';

@NgModule({
  declarations: [
    SagliklitariflerPage,
  ],
  imports: [
    IonicPageModule.forChild(SagliklitariflerPage),
  ],
  exports: [
    SagliklitariflerPage
  ]
})
export class SagliklitariflerPageModule {}
