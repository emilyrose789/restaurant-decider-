import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fav-detail',
  templateUrl: 'fav-detail.html',
})
export class FavDetailPage {
  name;
  address;

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {
  
  }

  ionViewDidLoad() {
  	this.name = this.navParams.get('fav').name;
  	this.address = this.navParams.get('fav').address;

  }

  close() {
    this.view.dismiss();
  }

}
