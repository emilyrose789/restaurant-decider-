import { Component, Injectable} from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Parse } from 'parse';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { ResDetailPage } from '../res-detail/res-detail';

@Component({
  selector: 'page-rest-list',
  templateUrl: 'rest-list.html'
})
export class RestListPage {

  constructor(public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
  
  }

  ionViewDidLoad() {
   
  }

  viewItem() {
    this.navCtrl.push(ResDetailPage);
  }

}