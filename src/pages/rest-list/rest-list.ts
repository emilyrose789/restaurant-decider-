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
  items = [];

  constructor(public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
  	this.items = this.dataService.getRestList();  
  }

  ionViewDidLoad() {
   
  }

  viewItem(item) {
    this.navCtrl.push(ResDetailPage, {
      item: item
    });
  }

}