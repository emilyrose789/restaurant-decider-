import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fav-detail',
  templateUrl: 'fav-detail.html',
})
export class FavDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {
  
  }

  ionViewDidLoad() {

  }

  close() {
    this.view.dismiss();
  }

}
