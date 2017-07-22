import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{WpapiProvider} from '../../providers/wpapi/wpapi';
import {WpdetayPage } from '../wpdetay/wpdetay';
/**
 * Generated class for the BlogPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
  providers: [WpapiProvider]
})
export class BlogPage {
datas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private wpapi: WpapiProvider) {
  wpapi.index(1).subscribe(data => {
    this.datas= data.json();
  });

  }

  openSinglePage(url){
    this.navCtrl.push(WpdetayPage,{
      url:url
    })
  }

}
