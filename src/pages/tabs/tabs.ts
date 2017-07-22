import { Component } from '@angular/core';

import { OnlinediyetPage } from '../onlinediyet/onlinediyet';
import { IletisimPage } from '../iletisim/iletisim';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OnlinediyetPage;
  tab3Root = IletisimPage;

  constructor() {

  }
}
