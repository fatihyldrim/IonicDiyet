import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {SagliklitariflerPage} from '../pages/sagliklitarifler/sagliklitarifler';
import { IletisimPage } from '../pages/iletisim/iletisim';
import { HomePage } from '../pages/home/home';
import { OnlinediyetPage} from '../pages/onlinediyet/onlinediyet';
import {BlogPage} from '../pages/blog/blog';
import { TabsPage } from '../pages/tabs/tabs';
import {SorucevapPage} from '../pages/sorucevap/sorucevap';
import {UygulamalarPage} from '../pages/uygulamalar/uygulamalar';
import {HttpModule} from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WpapiProvider } from '../providers/wpapi/wpapi';
import {WpdetayPage } from '../pages/wpdetay/wpdetay';
import {BeniaraPage} from '../pages/beniara/beniara';
import {HakkimizdaPage} from '../pages/hakkimizda/hakkimizda';

//import { TabsServiceProvider } from '../providers/tabs-service/tabs-service';

@NgModule({
  declarations: [
    MyApp,
    IletisimPage,
    HomePage,
    BeniaraPage,
    HakkimizdaPage,
    OnlinediyetPage,
    SagliklitariflerPage,
    BlogPage,
    SorucevapPage,
    UygulamalarPage,
    WpdetayPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IletisimPage,
    HomePage,
    BeniaraPage,
    HakkimizdaPage,
    OnlinediyetPage,
    SagliklitariflerPage,
    BlogPage,
    SorucevapPage,
    UygulamalarPage,
    WpdetayPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WpapiProvider,
    //TabsServiceProvider
  ]
})
export class AppModule {}

