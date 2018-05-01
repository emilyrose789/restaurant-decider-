import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-wheel',
  templateUrl: 'wheel.html'
})
export class WheelPage {

  constructor(public events:Events,public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

  }

  ionViewDidLoad() {
   
  }
  
}