import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Events } from 'ionic-angular';
import { FavDetailPage} from '../fav-detail/fav-detail';

@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html'
})
export class FavPage {

  constructor(public events:Events,public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

  }

  ionViewDidLoad() {
   
  }
  
  viewOrder() {
    this.navCtrl.push(FavDetailPage);
  }

}