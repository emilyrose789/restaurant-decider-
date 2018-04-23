import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Events } from 'ionic-angular';
import { FavDetailPage} from '../fav-detail/fav-detail';
import { SettingsPage } from '../settings/settings';
import { Parse } from 'parse';

@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html'
})
export class FavPage {

  favorites = [];

  constructor(public events:Events,public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
  	this.favorites = this.dataService.getFav();
  }

  ionViewWillEnter(){
    this.favorites = [];
    this.favorites = this.dataService.getFav();

  }
  ionViewDidLoad() {

  }

  viewFav(fav) {
    this.navCtrl.push(FavDetailPage, {
      fav: fav
    });
  }

   deleteFav(fav) {
     fav.destroy({});
    }

getSettings(){
    this.navCtrl.setRoot(SettingsPage);
  }
}
