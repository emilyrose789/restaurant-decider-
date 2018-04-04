import { Component } from '@angular/core';
import { RestListPage } from '../rest-list/rest-list';
import { FavPage } from '../fav/fav';
import { WheelPage } from '../wheel/wheel';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RestListPage;
  tab2Root = FavPage;
  tab3Root = WheelPage;

  constructor() {

  }
}
