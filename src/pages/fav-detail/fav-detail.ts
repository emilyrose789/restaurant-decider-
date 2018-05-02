import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fav-detail',
  templateUrl: 'fav-detail.html',
})
export class FavDetailPage {
  name;
  category;
  address;
  url;
  price;

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {
  
  }

  ionViewDidLoad() {
    this.name = this.navParams.get('fav').name;
    this.category = this.navParams.get('fav').category;
    this.address = this.navParams.get('fav').address;
    this.url = this.navParams.get('fav').url;
    this.price = this.navParams.get('fav').price;

  }

  close() {
    this.view.dismiss();
  }

}
