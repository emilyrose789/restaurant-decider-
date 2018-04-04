import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';

@IonicPage()
@Component({
  selector: 'page-res-detail',
  templateUrl: 'res-detail.html',
})
export class ResDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: Data ) {

  }

  ionViewDidLoad() {
  
  }
   
  exit() {
    this.view.dismiss();
  }

}
