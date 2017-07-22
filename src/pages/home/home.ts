import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { OnlinediyetPage } from '../onlinediyet/onlinediyet';
import { TabsService } from '../../providers/tabs-service/tabs-service';
import {SagliklitariflerPage} from '../sagliklitarifler/sagliklitarifler';
import {BlogPage} from '../blog/blog';
import {SorucevapPage} from '../sorucevap/sorucevap';
import {UygulamalarPage} from '../uygulamalar/uygulamalar';
import {BeniaraPage} from '../beniara/beniara'; 
import {HakkimizdaPage} from '../hakkimizda/hakkimizda';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [TabsService]
})

export class HomePage {

   constructor(public navCtrl: NavController,public tabsService: TabsService, public modalCtrl: ModalController) {}
  
   public info(){
    let bilgieklemodal = this.modalCtrl.create(BeniaraPage);
    bilgieklemodal.present();
  }

  public hakkimizda(){
    let bilgieklemodal = this.modalCtrl.create(HakkimizdaPage);
    bilgieklemodal.present();
  }

 
 gitonlineDiyet(){
    this.navCtrl.push(OnlinediyetPage);
    this.navCtrl.parent.select(1);
       
  }
gitsagliklitarifler(){
   this.navCtrl.push(SagliklitariflerPage);
 }
gitblog(){
   this.navCtrl.push(BlogPage);
 }
gitsorucevap(){
    this.navCtrl.push(SorucevapPage);
  }
gituygulamalar(){
  this.navCtrl.push(UygulamalarPage);
}
  ionViewWillEnter(){
    this.tabsService.hide();
  }

  ionViewWillLeave(){
    this.tabsService.show();
  }

}
