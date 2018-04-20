import { Component } from '@angular/core';
import { RestListPage } from '../rest-list/rest-list';
import { FavPage } from '../fav/fav';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FavPage;
  tab2Root = RestListPage;

  constructor() {

  }
}
