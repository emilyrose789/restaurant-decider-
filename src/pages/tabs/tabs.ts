import { Component } from '@angular/core';
import { FavPage } from '../fav/fav';
import { WheelPage } from '../wheel/wheel';
import { RestListPage } from '../rest-list/rest-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FavPage;
  tab2Root = WheelPage;
  tab3Root = RestListPage;

  constructor() {

  }
}
