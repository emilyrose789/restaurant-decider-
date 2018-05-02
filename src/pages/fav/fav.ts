import { Component } from '@angular/core';
import { App, ModalController, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Events } from 'ionic-angular';
import { FavDetailPage} from '../fav-detail/fav-detail';
import { SettingsPage} from "../settings/settings";

@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html'
})
export class FavPage {

  items = [];
  randInt = 0;
  randFavs =[];
  length = 0;
  output = '';
  Favs = [];

  constructor(public app: App, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public events:Events,public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.items = this.dataService.getFav();
    this.randFavs = this.dataService.getFavRand();
    this.randInt = 0;
  }

  ionViewDidLoad() {
  }

  ionViewCanEnter(){
  }

  viewFav(fav) {
    this.navCtrl.push(FavDetailPage, {
      fav: fav
    });
  }

  getSettings(){
    this.navCtrl.setRoot(SettingsPage);
  }

}
