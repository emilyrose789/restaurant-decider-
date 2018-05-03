import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavPage } from '../fav/fav';
import { WheelPage } from '../wheel/wheel';
import {SettingsPage} from "../settings/settings";
@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

goBack(){
  	    this.navCtrl.setRoot(SettingsPage);
  }
}
