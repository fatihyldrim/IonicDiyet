import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Http} from '@angular/http';

/**
 * Generated class for the WpdetayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-wpdetay',
  templateUrl: 'wpdetay.html',
})
export class WpdetayPage {
  datas:any=[];

    constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl: ModalController,private http:Http) {
  
  
  this.http.get(navParams.data.url+"/?_embed").subscribe(data=>{
    this.datas.push(data.json());
  });
  
  
    }


}
